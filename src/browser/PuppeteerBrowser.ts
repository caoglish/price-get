import cheerio = require("cheerio");
import puppeteer = require('puppeteer');
import UrlParser = require('url-parse');

import Browser from './Browser';
import PriceError from "../PriceError";
import PcCaseGearSearcher from "../extractor/Searcher/PcCaseGearSearcher";
import _ = require("lodash");

export default class PuppeteerBrowser extends Browser{
	private headless:boolean = true
	request(url) {
		console.log('puppeteer');
		let domain = UrlParser(url).hostname;
		let domainExtractor = this.pickExtractor(domain);
		if (domainExtractor == undefined) return new Promise((resolve)=>{
			resolve(new PriceError("no such extractor",url));
		});
		return puppeteer.launch({headless: this.headless})
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


	requestSearch(keyword:string,searcher:PcCaseGearSearcher){
		console.log(keyword,searcher);
		var options = {
			uri: searcher.getSearchUrl(keyword),
			transform: function (body:string) {
				return cheerio.load(body);
			}
		};
		return puppeteer.launch({headless: this.headless})
			.then(function (browser) {
				return browser.newPage();
			}).then((page) => {
				return page.goto(searcher.getSearchUrl(keyword)).then( function () {
					console.log("wait:"+Date().toString());
					return page.waitForSelector(searcher.waitForSelector).then(function(){
						console.log("wait done:"+Date().toString());
						return page.content();
					})
				});
			}).then((html)=> {
				let $=cheerio.load(html);
				let $target=$(searcher.searchResultArea);
				let list = $target.map(function(i,el){
					let url=$(el).attr('href');
					return url;
				}).get();
				return _.uniq(list);
			}).catch(function (err) {
				console.log(err);
			});;
	}
}
