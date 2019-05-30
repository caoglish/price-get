import commander = require('commander');
import PriceProcessor from './PriceProcessor';
import Stdout from './exporter/stdout';
import JsonExporter from './exporter/JsonExporter';
import _ = require('lodash');

const program = new commander.Command();
program.version('0.0.3')
	.option('--url <url>', 'price get from url')
	.option('--newFile', 'create new file if save into file')
	.option('--exportType <exportType>', 'export format')
	.option('--file <file>', 'result save to filename')
	.option('--keyword <keyword>', 'search keyword')
	.option('--site <site>', 'site for search')

const args = program.parse(process.argv);
let url = args['url'];
let exportType = args['exportType'];
let filename = args['file'] || "json/price-get-result.json";
let isNewFile = args['newFile'];
let keyword = args['keyword'];
let site = args['site'];


let priceProcessor = new PriceProcessor(new JsonExporter({
	filename: filename,
	newfile: isNewFile
}));

let processPromise: any;

if (!_.isEmpty(url)) {
	processPromise = priceProcessor.process(url)
} else if (!_.isEmpty(keyword)) {
	processPromise = priceProcessor.processSearch(keyword, site)
}

processPromise.then(() => {
	console.log("crawler processing is done!!!!");
	console.log("");
	process.exit();
});