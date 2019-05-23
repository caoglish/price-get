
import Extractor from './Extractor';
import _ = require('lodash');

class CatchExtractor extends Extractor
{
	static DomainList=['www.catch.com.au','catch.com.au']

	getTitle():string{
		return this._domReader.text('.product-container h1[itemprop="name"]');
	}

	getPrice():string{
		return this._domReader.text('div.price--main div.price--price-parts');
	}
	
	getCategory():string{
		let category=this._domReader.text('div.breadcrumb span[itemprop="itemListElement"]',2,'span[itemprop="name"]');
		if(_.isEmpty(category)){
			category='Catch Special';
		}

		 return category;
	}

	
}

export default CatchExtractor;