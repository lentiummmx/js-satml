const fs = require('fs');
const path = require('path')
console.log('__dirname', __dirname);
console.log('__filename', __filename);
const __rootname = process.cwd();
console.log('__rootname', __rootname);
const __rootname2 = path.dirname(__dirname,'/../');
console.log('__rootname2', __rootname2);
const __basename = process.env.PWD
console.log('__basename', __basename);
import FXP from './parsers/fxp';
fs.readFile( __rootname2 + '/examples/ref_main.xml', function (err, data) {
  if (err) {
    throw err; 
  }
  // console.log(data.toString());

  //-var parser = require('xml2json');
  //--var X2JS = require('x2js');
  //--var parser = new X2JS();

  var xml = data.toString();
  console.log("input -> %s", xml)
  
  // xml to json
  //-var json = parser.toJson(xml);
  //--var json = parser.xml2js(xml);
  var fxp = new FXP({ xml });
  var json = fxp.toJson();
  console.log("to json -> %s", JSON.stringify(json));
  
  // json to xml
  //-var xml = parser.toXml(json);
  //--var xml = parser.js2xml(json);
  fxp = new FXP({ json });
  var xml = fxp.toXml();
  console.log("back to xml -> %s", xml)

});
