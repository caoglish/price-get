class PcCaseGearSearcher 
{
	private searchUrl:string="https://www.pccasegear.com/search?query=";
	public  waitForSelector:string = "ul.ais-Hits-list"
	getSearchUrl(keyword:string):string{
		return this.searchUrl+keyword;
	}


}

export default PcCaseGearSearcher;