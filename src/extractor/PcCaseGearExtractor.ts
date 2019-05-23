
import Extractor from './Extractor';
import _ = require('lodash');

class PcCaseGearExtractor extends Extractor
{
	static DomainList=['www.pccasegear.com','pccasegear.com']

	getTitle():string{
		return this._domReader.text('div.prdct_grid_des');
	}

	getPrice():string{
		return this._domReader.text('div.prdct_price_box .product-price');
	}

	getCategory():string{
		return this._domReader.text('ol.breadcrumb li',1);
	}

	
}

export default PcCaseGearExtractor;