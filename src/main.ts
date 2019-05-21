import commander =require( 'commander');
import PriceProcessor from './PriceProcessor';
import Stdout from './exporter/stdout';
import JsonExporter from './exporter/JsonExporter';

const program = new commander.Command();
program.version('0.0.1')
	.option('--url <url>', 'price get from url')
	.option('--newFile', 'create new file if save into file')
	.option('--exportType <exportType>','export format')
	.option('--file <file>','result save to filename');





const args = program.parse(process.argv);
let url = args['url'];
let exportType = args['exportType'];
let filename = args['file']||"json/price-get-result.json";
let isNewFile = args['newFile'];


let priceProcessor = new PriceProcessor(new JsonExporter({
	filename: filename,
	newfile: isNewFile
}));
//let priceProcessor = new PriceProcessor(new Stdout());
priceProcessor
	.process(url)
	.then(() => {
		console.log("crawler processing is done!!!!");
		console.log("");
		process.exit();
	});




