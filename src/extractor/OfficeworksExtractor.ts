
import Extractor from './Extractor';
import _ = require('lodash');


class OfficeworksExtractor extends Extractor
{
	static DomainList=['www.officeworks.com.au','officeworks.com.au'];
	static isAjaxLoadPage=true;

	getTitle():string{
		let _titleSelector='h1[data-ref="product-title"]';
		console.log(this._$("*").length);
		return _.trim(this._$(_titleSelector).text());
	}

	getPrice():string{
		let _priceSelector='span[class*="Price__ProductPrice"]';
		console.log(this._$(_priceSelector).length);
		return _.trim(this._$(_priceSelector).text());
	}

	getCategory():string{
		let tag='span[class*="Product__CategoryLink"]';
		return _.trim(this._$(tag).text());
	}

	
}

export default OfficeworksExtractor;