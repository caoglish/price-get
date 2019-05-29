export default class PriceError {
	//code:number
	error:string
	url:string
	constructor(msg:string,url?:string){
		this.error=msg;
		this.url=url;

	}

	
}
