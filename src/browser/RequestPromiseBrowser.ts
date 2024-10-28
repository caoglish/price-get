import cheerio = require("cheerio");
import requestPromise = require('request-promise');
import UrlParser = require('url-parse');
import Browser from './Browser';
import PriceError from "../PriceError";
import PcCaseGearSearcher from "../extractor/Searcher/PcCaseGearSearcher";

export default class  RequestPromiseBrowser extends Browser{
	request (url:string) {
		console.log('requestPromise');
		let domain = UrlParser(url).hostname;
		let domainExtractor = this.pickExtractor(domain);
		if (domainExtractor == undefined) return new Promise((resolve)=>{
			resolve( new PriceError("no such extractor",url));
		});
		var options = {
			uri: url,
			transform: function (body:string) {
				return cheerio.load(body);
			}
		};
		return requestPromise(options).then(($) => {
			console.log(url);
			let extractor = new domainExtractor($, url);
			return extractor.getInfo();
		}).catch(function (err) {
			console.log(err);
			return new PriceError(err,url);
		});;
	}

	requestSearch(keyword:string,searcher:PcCaseGearSearcher){
		console.log(keyword,searcher);
		var options = {
			uri: searcher.getSearchUrl(keyword),
			transform: function (body:string) {
				return cheerio.load(body);
			}
		};
		return requestPromise(options).then(($) => {
			console.log("search");
			console.log($("ul a").text());
			return "";
		}).catch(function (err) {
			console.log(err);
			return new PriceError(err,"");
		});;
	}
}