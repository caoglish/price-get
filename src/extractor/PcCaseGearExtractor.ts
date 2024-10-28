

import BasicExtractor from './BasicPageExtractor';
import PcCaseGearSearcher from './Searcher/PcCaseGearSearcher';



class PcCaseGearExtractor extends BasicExtractor
{
	static DomainList=['www.pccasegear.com','pccasegear.com']
	static searcher=new PcCaseGearSearcher();
	
	protected extractedField={
		title:'div.title h1',
		price:'div.product-desc.pInfo div.price-box div.price',
		category:['div.breadcrumb-container ul.bread-links li',1]
	}


}

export default PcCaseGearExtractor;