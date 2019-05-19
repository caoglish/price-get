
import PriceData from '../PriceData';

export default abstract class Exporter
{
	protected options: any
	constructor(options: any=null) {
		this.options = options;
	}

	abstract export(data:PriceData): void;
	

}