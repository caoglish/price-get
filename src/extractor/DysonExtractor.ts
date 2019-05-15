
import Extractor from './Extractor';
import _ = require('lodash');

class DysonExtractor extends Extractor
{
	static DomainList=['www.dyson.com.au','dyson.com.au','shop.dyson.com.au']

	getTitle():string{
		let _titleSelector='.product-name .mainInfo  h1';
		return _.trim(this._$(_titleSelector).text());
	}

	getPrice():string{
		let _priceSelector='.product-name .mainInfo .price';
		let price =this._$(_priceSelector).map((i,elem)=>{
			let $el=this._$(elem);
			return $el.parent().hasClass('special-price')||$el.parent().hasClass('regular-price')?$el.text():null;
		}).filter((i,elem)=>{
			return elem !==null;
		}).get();
	 
		return _.trim(price[0]);
	}

	getCategory():string{
		return "Dyson";
	}
}

export default DysonExtractor;