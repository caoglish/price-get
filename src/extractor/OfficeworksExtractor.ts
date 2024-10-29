
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
		category:'span[class*="__CategoryLink"]'
	}

	 getCategory():string|string[]{
		let $categorylist=this._$(this.extractedField.category)
		let _$=this._$
		let list =$categorylist.map((i,n)=>{
			return  _$(n).text()
		}).get();
		console.log("list",list)
		return list;
	 }
}

export default OfficeworksExtractor;