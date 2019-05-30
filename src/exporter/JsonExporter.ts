import PriceData from '../PriceData';
import Exporter from './Exporter';
import fs = require('fs');
import _ = require('lodash');

export default class JsonExporter extends Exporter {
	protected count=0;
	export(data: PriceData): void {
		
		let jsonString:string;
		var jsonContent;
		let filename= this.options.filename;
		if (this.count==0&&(!fs.existsSync(filename) || this.options.newfile==true)) {
			jsonContent = [];

		}else{
			let content = fs.readFileSync(filename);
			jsonContent = JSON.parse(content.toString());
			if (!_.isArray(jsonContent)) jsonContent = [jsonContent];

		}
		jsonContent.push(data);
		jsonString = JSON.stringify(jsonContent, null, 4);
		fs.writeFileSync(filename, jsonString);
		console.log(this.count++)
	}
}