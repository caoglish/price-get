import cheerio = require("cheerio");
import requestPromise = require('request-promise');
import UrlParser = require('url-parse');
import Browser from './Browser';
import PriceError from "../PriceError";

export default class  RequestPromiseBrowser extends Browser{
	request (url) {
			console.log('requestPromise');
			let domain = UrlParser(url).hostname;
			let domainExtractor = this.pickExtractor(domain);
			if (domainExtractor == undefined) return new Promise((resolve)=>{
				resolve( new PriceError("no such extractor",url));
			});
			var options = {
				uri: url,
				transform: function (body) {
					return cheerio.load(body);
				}
			};
			return requestPromise(options).then(($) => {
				let extractor = new domainExtractor($, url);
				return extractor.getInfo();
			}).catch(function (err) {
				console.log(err);
				return new PriceError(err,url);
			});;
		}
	}