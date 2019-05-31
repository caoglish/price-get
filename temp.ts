import fs = require('fs');
import _ = require('lodash');


let filename = "./json/price-get-result.json"
let outfilename = "./json/filtered-result.json"
let content = fs.readFileSync(filename);
let jsonContent = JSON.parse(content.toString());
let result = jsonContent.filter((el) => {
	return el.category == "Graphics Cards";
}).map((el) => {
	delete el.other;
	el.price= parseInt(_.trim(el.price,"$"));
	return el;
});
result=_.sortBy(result,['price']);
result=_.uniqBy(result,"url");

let resultString = JSON.stringify(result, null, 4);
fs.writeFileSync(outfilename, resultString);

console.log("cleaning process is done.")
console.log("number of record have been processed:"+result.length)


