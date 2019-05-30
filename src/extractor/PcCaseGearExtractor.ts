

import BasicExtractor from './BasicPageExtractor';
import PcCaseGearSearcher from './PcCaseGearSearcher';



class PcCaseGearExtractor extends BasicExtractor
{
	static DomainList=['www.pccasegear.com','pccasegear.com']
	static searcher=new PcCaseGearSearcher();
	
	protected extractedField={
		title:'div.prdct_grid_des',
		price:'div.prdct_price_box .product-price',
		category:['ol.breadcrumb li',1]
	}


}

export default PcCaseGearExtractor;