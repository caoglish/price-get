import cheerio = require("cheerio");
import requestPromise = require('request-promise');
import UrlParser = require('url-parse');
import PriceData from '../PriceData';
import Browser from './Browser';

export default class  RequestPromiseBrowser extends Browser{
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
				return priceInfo;
			}).catch(function (err) {
				console.log(err);
			});;
		}
	}