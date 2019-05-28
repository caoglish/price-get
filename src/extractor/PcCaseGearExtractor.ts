

import BasicExtractor from './BasicExtractor';



class PcCaseGearExtractor extends BasicExtractor
{
	static DomainList=['www.pccasegear.com','pccasegear.com']

	protected extractedField={
		title:'div.prdct_grid_des',
		price:'div.prdct_price_box .product-price',
		category:['ol.breadcrumb li',1]
	}
}

export default PcCaseGearExtractor;