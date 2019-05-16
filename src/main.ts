import commander = require('commander');
import PriceProcessor from './PriceProcessor';
import Stdout from './exporter/stdout';

const program = new commander.Command();
program.version('0.0.1')
	.option('--url <url>', 'price get from url');



const args = program.parse(process.argv);
let url = args['url'];
let priceProcessor = new PriceProcessor(new Stdout());
priceProcessor
	.process(url)
	.then(() => {
		console.log("crawler processing is done!!!!");
		console.log("");
		process.exit();
	});




	