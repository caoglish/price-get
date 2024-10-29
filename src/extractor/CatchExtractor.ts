import BasicExtractor from './BasicPageExtractor';
import _ = require('lodash');
import CatchSearcher from './Searcher/CatchSearcher';
class CatchExtractor extends BasicExtractor
{
	static DomainList=['www.catch.com.au','catch.com.au']
	static searcher=new CatchSearcher();
	protected extractedField={
		title:'.product-container h1[itemprop="name"]',
		price:'div.price--main div.price--price-parts',
		category:['div.breadcrumb span[itemprop="itemListElement"]',2,'span[itemprop="name"]']

	}

	getCategory():string|string[]{
		let category=super.getCategory();
		if(_.isEmpty(category)){
			category='Catch Special';
		}
        return category;
	}
}

export default CatchExtractor;

//https://www.catch.com.au/search?query=nike




