import cheerio = require('cheerio');
import DomReader from '../lib/DomReader';


export default abstract class Extractor
{
	static DomainList:string[];
	static isAjaxLoadPage:boolean=false;
	_$:CheerioStatic; 
	_url:string;
	protected _domReader:DomReader;

	// _title:string;
	// _price:string;
	// _titleSelector:string;
	// _priceSelector:string; 
	constructor(cheerio:CheerioStatic,url:string){
		this._$=cheerio;
		this._url=url;
		this._domReader=new DomReader(this._$);
	}
	abstract getPrice(): string;
	abstract getTitle(): string;
	abstract getCategory (): string;
	getOther():any{
		return null;
	}

}