
import Extractor from './Extractor';
import _ = require('lodash');

class PcCaseGearExtractor extends Extractor
{
	static DomainList=['www.pccasegear.com','pccasegear.com']

	getTitle():string{
		let _titleSelector='div.prdct_grid_des';
		return _.trim(this._$(_titleSelector).text());
	}

	getPrice():string{
		let _priceSelector='div.prdct_price_box .product-price';
		return _.trim(this._$(_priceSelector).text());
	}

	getCategory():string{
		let tag='ol.breadcrumb li';
		return _.trim(this._$(tag).eq(1).text());
	}
}

export default PcCaseGearExtractor;