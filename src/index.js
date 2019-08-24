const fs = require('fs');
const path = require('path')
console.log('__dirname', __dirname);
const __rootname = path.dirname(__dirname,'/../');
console.log('__rootname', __rootname);
const __basename = process.env.PWD
console.log('__basename', __basename);
fs.readFile( __rootname + '/examples/ref_main.xml', function (err, data) {
  if (err) {
    throw err; 
  }
  // console.log(data.toString());

  //-var parser = require('xml2json');
  //--var X2JS = require('x2js');
  //--var parser = new X2JS();
  var parser = require('fast-xml-parser');

  var options = {
    attributeNamePrefix : "@_",
    // attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : false,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
    // attrValueProcessor: a => he.decode(a, {isAttributeValue: true}),//default is a=>a
    // tagValueProcessor : a => he.decode(a) //default is a=>a
};

  var xml = data.toString();
  console.log("input -> %s", xml)
  
  // xml to json
  //-var json = parser.toJson(xml);
  //--var json = parser.xml2js(xml);
  var json = parser.parse(xml, options);
  console.log("to json -> %s", JSON.stringify(json));
  
  // json to xml
  //-var xml = parser.toXml(json);
  //--var xml = parser.js2xml(json);
  var Parser = parser.j2xParser;
//default options need not to set
var defaultOptions = {
    attributeNamePrefix : "@_",
    // attrNodeName: "@", //default is false
    textNodeName : "#text",
    ignoreAttributes : false,
    cdataTagName: "__cdata", //default is false
    cdataPositionChar: "\\c",
    format: false,
    indentBy: "  ",
    supressEmptyNode: false,
    // tagValueProcessor: a=> he.encode(a, { useNamedReferences: true}),// default is a=>a
    // attrValueProcessor: a=> he.encode(a, {isAttributeValue: isAttribute, useNamedReferences: true})// default is a=>a
};
var parser = new Parser(defaultOptions);
var xml = parser.parse(json);
  console.log("back to xml -> %s", xml)

});
