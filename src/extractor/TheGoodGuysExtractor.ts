
import Extractor from './Extractor';
import _ = require('lodash');

class TheGoodGuysExtractor extends Extractor
{
	static DomainList=['www.thegoodguys.com.au','thegoodguys.com.au']

	getTitle():string{

		return this._domReader.text('h1.titleItems_head');
	}

	getPrice():string{
		return this._domReader.text('span.pricepoint-price');
	}

	getCategory():string{
		return this._domReader.text('ol.breadcrumb li',1);
	}

	
}

export default TheGoodGuysExtractor;