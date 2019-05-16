//import _ from 'lodash';
import PriceData from '../PriceData';
import Exporter from './Exporter';

export default  class Stdout extends Exporter
{
	
	export(data:PriceData): void{
		console.log("Retrive information get from:"+data.url);
		console.log("Title:"+data.title);
		console.log("Category:"+data.category);
		console.log("Price:"+data.price);
		console.log("");
	// 	if(!_.isEmpty(this._priceInfo.other)){
	// 		console.log("extra information:"+this._priceInfo.other);
	// 	}
	// }
	}
	

}