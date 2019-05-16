import cheerio = require('cheerio');
import request =require( 'request');
import requestPromise = require('request-promise');
import _= require('lodash');
import UrlParser =require( 'url-parse');
import DysonExtractor from './extractor/DysonExtractor';
import PcCaseGearExtractor from './extractor/PcCaseGearExtractor';
import CatchExtractor from './extractor/CatchExtractor';
import PriceData from './PriceData';
import Exporter from './exporter/Exporter'


 class PriceProcessor {
	exportor:Exporter;
	constructor(exportor:Exporter){
		
		this.exportor=exportor;
		
	}
	process(url: string) {
		var options = {
			uri: url,
			transform: function (body) {
				return cheerio.load(body);
			}
		};

		return requestPromise(options).then(($) =>{
				let a = PcCaseGearExtractor;
				
				let domain = UrlParser(url).hostname;
				let domainExtractor = pickExtractor(domain);

				//let extractor=new DysonExtractor(cheerio.load(html));;	
				if (domainExtractor == undefined) return;
				let extractor = new domainExtractor($, url);
				let title = extractor.getTitle();
				let price = extractor.getPrice();
				let category = extractor.getCategory();
				let other = extractor.getOther();

				let priceInfo:PriceData = {
					title: title,
					price: price,
					category: category,
					url: url,
					other: other,
				};
		
				this.exportor.export(priceInfo);
				
			
		}) .catch(function (err) {
			
		});;
	}
}


function pickExtractor(domain): any {
	let extractorList = [
		PcCaseGearExtractor,
		DysonExtractor,
		CatchExtractor
	]

	let extractor;
	for (extractor of extractorList) {
		//  console.log(extractor.DomainList);
		//  console.log(domain);
		if (_.includes(extractor.DomainList, domain)) {
			//  console.log(extractor);
			return extractor;
		}
	}
	return null;
}


export default PriceProcessor;