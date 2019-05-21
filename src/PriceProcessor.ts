import cheerio = require('cheerio');
import puppeteer = require('puppeteer');

import requestPromise = require('request-promise');
import _ = require('lodash');
import UrlParser = require('url-parse');
import DysonExtractor from './extractor/DysonExtractor';
import PcCaseGearExtractor from './extractor/PcCaseGearExtractor';
import CatchExtractor from './extractor/CatchExtractor';
import OfficeworksExtractor from './extractor/OfficeworksExtractor';

import PriceData from './PriceData';
import Exporter from './exporter/Exporter'




let extractorList = [
	PcCaseGearExtractor,
	DysonExtractor,
	CatchExtractor,
	OfficeworksExtractor
]

class PriceProcessor {
	exportor: Exporter;
	constructor(exportor: Exporter) {
		this.exportor = exportor;
	}
	pickProcess(domain) :Browser{
		for (let extractor of extractorList) {
			if (_.includes(extractor.DomainList, domain)) {
				if (extractor.isAjaxLoadPage) {
					return new PuppeteerBrowser();
				}
				return new RequestPromiseBrowser();
			}
		}
		return new RequestPromiseBrowser();
	}

	process(url: string) {
		let domain = UrlParser(url).hostname;
		let browser = this.pickProcess(domain);
		

		return browser.request(url).then((priceInfo)=>{
			this.exportor.export(priceInfo);
		});

	}
	
}


abstract class Browser{
	abstract request(url:string);
	pickExtractor(domain): any {
		for (let extractor of extractorList) {
			if (_.includes(extractor.DomainList, domain)) {
				return extractor;
			}
		}
		return null;
	}



}
class PuppeteerBrowser extends Browser{
	request(url) {
		console.log('puppeteer');
		let domain = UrlParser(url).hostname;
		return puppeteer.launch()
			.then(function (browser) {
				return browser.newPage();
			}).then((page) => {

				return page.goto(url).then(function () {
					return page.content();
				});
			}).then((html)=> {
				let $=cheerio.load(html);
				
				let domainExtractor = this.pickExtractor(domain);
				if (domainExtractor == undefined) return;
				let extractor = new domainExtractor($, url);
				let title = extractor.getTitle();
				let price = extractor.getPrice();
				let category = extractor.getCategory();
				let other = extractor.getOther();

				let priceInfo: PriceData = {
					title: title,
					price: price,
					category: category,
					url: url,
					other: other,
				};

				return priceInfo;
			}).catch(function (err) {
				console.log(err);
			});;
	}

}

class  RequestPromiseBrowser extends Browser{
	request (url) {
			console.log('requestPromise');
			var options = {
				uri: url,
				transform: function (body) {
					return cheerio.load(body);
				}
			};


			return requestPromise(options).then(($) => {
				

				let domain = UrlParser(url).hostname;
				let domainExtractor = this.pickExtractor(domain);
				let extractor = new domainExtractor($, url);

				//let extractor=new DysonExtractor(cheerio.load(html));;	
				if (domainExtractor == undefined) return;
				console.log("requestPromise here");
				let title = extractor.getTitle();
				let price = extractor.getPrice();
				let category = extractor.getCategory();
				let other = extractor.getOther();

				let priceInfo: PriceData = {
					title: title,
					price: price,
					category: category,
					url: url,
					other: other,
				};
				console.log(priceInfo)
			

				return priceInfo;
			}).catch(function (err) {
				console.log(err);
			});;
		}
	}





export default PriceProcessor;