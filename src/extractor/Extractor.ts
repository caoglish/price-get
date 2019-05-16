import cheerio = require('cheerio');


export default abstract class Extractor
{
	static DomainList:string[];
	_$:CheerioStatic; 
	_url:string;
	// _title:string;
	// _price:string;
	// _titleSelector:string;
	// _priceSelector:string;
	constructor(cheerio:CheerioStatic,url:string){
		this._$=cheerio;
		this._url=url;
	}
	abstract getPrice(): string;
	abstract getTitle(): string;
	abstract getCategory (): string;
	getOther():any{
		return null;
	}

}