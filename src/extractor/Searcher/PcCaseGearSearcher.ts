import Searcher from "./Searcher";

class PcCaseGearSearcher  extends Searcher
{
	protected searchUrl:string="https://www.pccasegear.com/search?query=";
	public  waitForSelector:string = "ul.ais-Hits-list"
	public searchResultArea:string = 'ul.ais-Hits-list a'
}

export default PcCaseGearSearcher;