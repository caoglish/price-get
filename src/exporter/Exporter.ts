
import PriceData from '../PriceData';

export default abstract class Exporter
{
	
	abstract export(data:PriceData): void;
	

}