import BasicExtractor from './BasicExtractor';
import _ = require('lodash');
class CatchExtractor extends BasicExtractor
{
	static DomainList=['www.catch.com.au','catch.com.au']

	protected extractedField={
		title:'.product-container h1[itemprop="name"]',
		price:'div.price--main div.price--price-parts',
		category:['div.breadcrumb span[itemprop="itemListElement"]',2,'span[itemprop="name"]']

	}

	getCategory():string{
		let category=super.getCategory();
		if(_.isEmpty(category)){
			category='Catch Special';
		}
        return category;
	}
}

export default CatchExtractor;






