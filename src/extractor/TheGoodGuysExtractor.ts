

import BasicExtractor from './BasicPageExtractor';



class TheGoodGuysExtractor extends BasicExtractor
{
	static DomainList=['www.thegoodguys.com.au','thegoodguys.com.au']

	protected extractedField={
		title:'h1.titleItems_head',
		price:'span.pricepoint-price',
		category:['ol.breadcrumb li',1]
	}
}

export default TheGoodGuysExtractor;