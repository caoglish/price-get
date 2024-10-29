import cheerio = require('cheerio');
import DomReader from '../lib/DomReader';
import PriceData from '../PriceData';
import Searcher from './Searcher/Searcher';
import UrlParser = require('url-parse');

export default abstract class PageExtractor
{

	static DomainList:string[];
	static isAjaxLoadPage:boolean=false;
	static waitForSelector:string="";
	static waitFor:any=1000;
	static searcher:Searcher=null;
	_$:cheerio.CheerioAPI;
	_url:string;
	

	protected _domReader:DomReader;
	constructor(cheerio:cheerio.CheerioAPI,url:string){
		this._$=cheerio;
		this._url=url;
		this._domReader=new DomReader(this._$);
	}
	abstract getPrice(): string;
	abstract getTitle(): string;
	abstract getCategory (): string|string[];
	getOther():any{
		return {...this.getExtractorName()};
	}
	getInfo():PriceData{
		let priceInfo: PriceData = {
			title: this.getTitle(),
			price:  this.getPrice(),
			category: this.getCategory(),
			url: this._url,
			domain:this.getDomainName(),
			
			other: this.getOther(),
		};
		return priceInfo;
	}

	getExtractorName():{extracter:string}{
		return {extracter: this.constructor.name}

	}

	getDomainName(){
		let domain = UrlParser( this._url).hostname;
		return domain
		
	}

}