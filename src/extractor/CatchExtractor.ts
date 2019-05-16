
import Extractor from './Extractor';
import _ = require('lodash');

class CatchExtractor extends Extractor
{
	static DomainList=['www.catch.com.au','catch.com.au']

	getTitle():string{
		let _titleSelector='.product-container h1[itemprop="name"]';
		return _.trim(this._$(_titleSelector).text());
	}

	getPrice():string{
		let _priceSelector='div.price--main div.price--price-parts';
		return _.trim(this._$(_priceSelector).text());
	}

	getCategory():string{
		let tag='div.breadcrumb span[itemprop="itemListElement"]';
		let category=_.trim(this._$(tag).eq(2).find('span[itemprop="name"]').text());
		if(_.isEmpty(category)){
			category='Catch Special';
		}

		 return category;
	}

	
}

export default CatchExtractor;