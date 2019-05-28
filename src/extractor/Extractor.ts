import cheerio = require('cheerio');
import DomReader from '../lib/DomReader';


export default abstract class Extractor
{
	static DomainList:string[];
	static isAjaxLoadPage:boolean=false;
	static waitForSelector:string="";
	static waitFor:any=1000;
	_$:CheerioStatic; 
	_url:string;
	protected _domReader:DomReader;
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