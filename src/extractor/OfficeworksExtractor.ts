
import BasicExtractor from './BasicExtractor';



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
		category:'span[class*="Product__CategoryLink"]'
	}
}

export default OfficeworksExtractor;