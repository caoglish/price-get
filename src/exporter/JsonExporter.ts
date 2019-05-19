import PriceData from '../PriceData';
import Exporter from './Exporter';
import fs = require('fs');
import _ = require('lodash');

export default class JsonExporter extends Exporter {




	

	export(data: PriceData): void {
		let jsonString:string;
		var jsonContent;
		let filename= this.options.filename;
		if (!fs.existsSync(filename) || this.options.newfile==true) {
			jsonContent = [];
			
		}else{
			let content = fs.readFileSync(filename);
			jsonContent = JSON.parse(content.toString());
			if (!_.isArray(jsonContent)) jsonContent = [jsonContent];

		}
		jsonContent.push(data);
		jsonString = JSON.stringify(jsonContent, null, 4);
		console.log(jsonString);
		fs.writeFileSync(filename, jsonString);
	}
	


}