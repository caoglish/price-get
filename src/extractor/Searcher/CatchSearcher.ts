import Searcher from "./Searcher";

export default class CatchSearcher  extends Searcher
{
	protected searchUrl:string="https://www.catch.com.au/search?query=";
	public  waitForSelector:string = "div.product"
	public searchResultArea:string = 'div.product a.product--title-link'
}

