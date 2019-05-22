import cheerio = require("cheerio");
import puppeteer = require('puppeteer');
import UrlParser = require('url-parse');
import PriceData from '../PriceData';
import Browser from './Browser';

export default class PuppeteerBrowser extends Browser{
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
