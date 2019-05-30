import _ =require("lodash");
import ExtractorList from '../extractor/ExtractorList';
export default class ExtractorPicker{
	static domain(domain:string): any {
		for (let extractor of ExtractorList) {
			if (_.includes(extractor.DomainList, domain)) {
				return extractor;
			}
		}
		return null;
	}

	static className(name:string):any{
		for (let extractor of ExtractorList) {
			if (_.includes(extractor.name, name+"Extractor")) {
				return extractor;
			}
		}
		return null;
	}
}