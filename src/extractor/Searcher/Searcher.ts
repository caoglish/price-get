import UrlParser = require('url-parse');
import _ = require('lodash') ;
export default abstract class Searcher 
{
	protected abstract searchUrl:string;
	public  abstract waitForSelector:string;
	getSearchUrl(keyword:string):string{
		return this.searchUrl+keyword;
	}


}

 