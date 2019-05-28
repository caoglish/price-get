import ExtractorList from '../extractor/ExtractorList';
import _ = require('lodash');
export default abstract class Browser{
	abstract request(url:string);
	pickExtractor(domain): any {
		for (let extractor of ExtractorList) {
			if (_.includes(extractor.DomainList, domain)) {
				return extractor;
			}
		}
		return null;
	}
}