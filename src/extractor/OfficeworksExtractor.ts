
import BasicExtractor from './BasicPageExtractor';



class OfficeworksExtractor extends BasicExtractor
{
	static DomainList=['www.officeworks.com.au','officeworks.com.au'];
	static isAjaxLoadPage=true;
	// static waitForSelector='span[class*="Price__ProductPrice"]';
	static waitForSelector='span[class*="PriceText__ProductPrice"]';
	static waitFor=10000;

	protected extractedField={
		title:'h1[data-ref="product-title"]',
		price:'span[class*="PriceText__ProductPrice"]',
		category:['ul[class*="Breadcrumbs__BreadcrumbsContainer"] li a',2]
	}
}

export default OfficeworksExtractor;