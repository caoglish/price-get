import _ = require('lodash');
import UrlParser = require('url-parse');

import RequestPromiseBrowser from './browser/RequestPromiseBrowser'
import PuppeteerBrowser from './browser/PuppeteerBrowser'

import Exporter from './exporter/Exporter'
import ExtractorList from './extractor/ExtractorList';
import Browser from './browser/Browser';
import ExtractorPicker from './lib/ExtractorPicker';

class PriceProcessor {
	exportor: Exporter;
	constructor(exportor: Exporter) {
		this.exportor = exportor;
	}
	pickProcess(domain): Browser {
		for (let extractor of ExtractorList) {
			if (_.includes(extractor.DomainList, domain)) {
				if (extractor.isAjaxLoadPage) {
					return new PuppeteerBrowser();
				}
				return new RequestPromiseBrowser();
			}
		}
		return new RequestPromiseBrowser();
	}
	pickProcessByName(name: string): Browser {
		for (let extractor of ExtractorList) {
			if (_.includes(extractor.name, name + "Extractor")) {
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
		console.log(domain);
		console.log(browser);
		return browser.request(url).then((priceInfo) => {
			console.log(priceInfo);
			this.exportor.export(priceInfo);
		});
	}

	processSearch(keyword: string, extractorName: string) {
		let browser = new PuppeteerBrowser();
		let extractor = ExtractorPicker.className(extractorName)
		let searcher = extractor.searcher;
		console.log(browser);
		console.log(extractor);
		console.log(searcher);

		return new Promise((resolve) => {
			browser.requestSearch(keyword, searcher).then((urlList) => {
				if (!_.isArray(urlList)) return;
				console.log(urlList, urlList.length);
				urlList.reduce((previousPromise, el) => {
					let requestUrl = 'https://' + extractor.DomainList[0] + el;
					return previousPromise.then(() => {
						return this.process(requestUrl);
					});
				}, Promise.resolve())
					.then(() => {
						resolve();
					});
			});
		});
	}

}
export default PriceProcessor;