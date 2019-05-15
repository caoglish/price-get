import cheerio = require('cheerio');
import request = require('request');
import _ = require('lodash');
import DysonExtractor from './extractor/DysonExtractor';
import PcCaseGearExtractor from './extractor/PcCaseGearExtractor';
import Extractor from './extractor/Extractor';
import UrlParser = require('url-parse');

const args = getArgs()

function getArgs() {
	const args = {}
	process.argv
		.slice(2, process.argv.length)
		.forEach(arg => {
			// long arg
			if (arg.slice(0, 2) === '--') {
				const longArg = arg.split('=')
				args[longArg[0].slice(2, longArg[0].length)] = longArg[1]
			}
			// flags
			else if (arg[0] === '-') {
				const flags = arg.slice(1, arg.length).split('')
				flags.forEach(flag => {
					args[flag] = true
				})
			}
		})
	return args
}


let url = args['url'];



let e = pickExtractor(UrlParser(url).hostname);

request(url, function (error, response, html) {
	if (!error && response.statusCode == 200) {

		let a = PcCaseGearExtractor;
		var $ = cheerio.load(html);
		let domain =UrlParser(url).hostname;
		let domainExtractor = pickExtractor(domain);

		//let extractor=new DysonExtractor(cheerio.load(html));;	
		if (domainExtractor == undefined) return;
		let extractor = new domainExtractor($);
		let title = extractor.getTitle();
		let price = extractor.getPrice();
		let category = extractor.getCategory();

		//console.log(extractor);
		console.log(_.trim(url));
		console.log(title);
		console.log(price);
		console.log(category);
		console.log("");



	}
});



function pickExtractor(domain): any {
	let extractorList = [
		PcCaseGearExtractor,
		DysonExtractor
	]

	let extractor;
	for (extractor of extractorList) {
		//  console.log(extractor.DomainList);
		//  console.log(domain);
		if (_.includes(extractor.DomainList, domain)){
			//  console.log(extractor);
			return extractor;
		}
	}




	return null;
}
