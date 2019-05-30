import _ = require('lodash');
import ExtractorPicker from '../lib/ExtractorPicker';
import PcCaseGearSearcher from '../extractor/PcCaseGearSearcher';
export default abstract class Browser{
	abstract request(url:string);
	abstract requestSearch(keyword:string,searcher:PcCaseGearSearcher);
	pickExtractor(domain): any {
		return ExtractorPicker.domain(domain);
	}
}