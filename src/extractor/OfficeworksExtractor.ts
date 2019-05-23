
import Extractor from './Extractor';
import _ = require('lodash');


class OfficeworksExtractor extends Extractor
{
	static DomainList=['www.officeworks.com.au','officeworks.com.au'];
	static isAjaxLoadPage=true;

	getTitle():string{
		return this._domReader.text('h1[data-ref="product-title"]');
	}

	getPrice():string{

		return this._domReader.text('span[class*="Price__ProductPrice"]');
	}

	getCategory():string{

		return this._domReader.text('span[class*="Product__CategoryLink"]');
	}

	
}

export default OfficeworksExtractor;