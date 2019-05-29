import cheerio = require("cheerio");
import puppeteer = require('puppeteer');
import UrlParser = require('url-parse');

import Browser from './Browser';
import PriceError from "../PriceError";

export default class PuppeteerBrowser extends Browser{
	request(url) {
		console.log('puppeteer');
		let domain = UrlParser(url).hostname;
		let domainExtractor = this.pickExtractor(domain);
		if (domainExtractor == undefined) return new Promise((resolve)=>{
			resolve(new PriceError("no such extractor",url));
		});
		return puppeteer.launch()
			.then(function (browser) {
				return browser.newPage();
			}).then((page) => {
				return page.goto(url).then( function () {
					console.log("wait:"+Date().toString());
					return page.waitForSelector(domainExtractor.waitForSelector).then(function(){
						console.log("wait done:"+Date().toString());
						return page.content();
					})
				});
			}).then((html)=> {
				let $=cheerio.load(html);
				let extractor = new domainExtractor($, url);
				return extractor.getInfo();
			}).catch(function (err) {
				console.log(err);
				return new PriceError(err,url);
			});;
	}
}
