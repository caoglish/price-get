import _ = require('lodash');
import UrlParser = require('url-parse');

import RequestPromiseBrowser from './browser/RequestPromiseBrowser'
import PuppeteerBrowser from './browser/PuppeteerBrowser'

import Exporter from './exporter/Exporter'
import ExtractorList from './extractor/ExtractorList';
import Browser from './browser/Browser';

class PriceProcessor {
	exportor: Exporter;
	constructor(exportor: Exporter) {
		this.exportor = exportor;
	}
	pickProcess(domain) :Browser{
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

	process(url: string) {
		let domain = UrlParser(url).hostname;
		let browser = this.pickProcess(domain);


		return browser.request(url).then((priceInfo)=>{
			this.exportor.export(priceInfo);
		});

	}
}
export default PriceProcessor;