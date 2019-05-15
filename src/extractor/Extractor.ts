import cheerio = require('cheerio');


export default abstract class Extractor
{
	static DomainList:string[];
	_$:CheerioStatic; 
	// _title:string;
	// _price:string;
	// _titleSelector:string;
	// _priceSelector:string;
	constructor(cheerio:CheerioStatic){
		this._$=cheerio;
	}
	abstract getPrice(): string;
	abstract getTitle(): string;
	abstract getCategory (): string;
}