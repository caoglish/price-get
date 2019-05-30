import cheerio = require('cheerio');//ddfessdfdfs

import Extractor from '../PageExtractor';
import _ = require('lodash');

export default abstract class SearchExtractor extends Extractor
{
	protected _searchEngine:string;

}
