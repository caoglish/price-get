import cheerio = require('cheerio');//ddfessdfdfs

import Extractor from './Extractor';
import _ = require('lodash');

export default abstract class BasicExtractor extends Extractor
{
	protected abstract extractedField:ExtractedFieldInteface;
	getTitle():string{
		return this._domReader.text(this.extractedField.title);
	}
	getPrice():string{
		return this._domReader.text(this.extractedField.price);
	}
	getCategory():string{
		if(_.isString(this.extractedField.category)){
			return this._domReader.text(this.extractedField.category);
		}else if(_.isArray(this.extractedField.category)){
			return this._domReader.text.apply(this, this.extractedField.category);
		}
		return null;
	}
}

interface ExtractedFieldInteface{
	title:string;
	price:string;
	category:string|(string|number)[];
}