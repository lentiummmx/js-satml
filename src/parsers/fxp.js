import fast_xml_parser from 'fast-xml-parser';

class FXP {

    #xml;
    #json;

    #DEFAULT_TO_JSON_OPTIONS = {
        attributeNamePrefix: "@_",
        // attrNodeName: "attr", //default is 'false'
        textNodeName: "#text",
        ignoreAttributes: false,
        ignoreNameSpace: false,
        allowBooleanAttributes: false,
        parseNodeValue: true,
        parseAttributeValue: false,
        trimValues: true,
        cdataTagName: "__cdata", //default is 'false'
        cdataPositionChar: "\\c",
        localeRange: "", //To support non english character in tag/attribute values.
        parseTrueNumberOnly: false,
        // attrValueProcessor: a => he.decode(a, {isAttributeValue: true}),//default is a=>a
        // tagValueProcessor : a => he.decode(a) //default is a=>a
    };

    #DEFAUL_TO_XML_OPTIONS = {
        attributeNamePrefix: "@_",
        // attrNodeName: "@", //default is false
        textNodeName: "#text",
        ignoreAttributes: false,
        cdataTagName: "__cdata", //default is false
        cdataPositionChar: "\\c",
        format: false,
        indentBy: "  ",
        supressEmptyNode: false,
        // tagValueProcessor: a=> he.encode(a, { useNamedReferences: true}),// default is a=>a
        // attrValueProcessor: a=> he.encode(a, {isAttributeValue: isAttribute, useNamedReferences: true})// default is a=>a
    };

    JsonParser = fast_xml_parser;
    XmlParser = fast_xml_parser.j2xParser;

    constructor(opts) {
        this.#xml = opts.xml || '';
        this.#json = opts.json || {};
    }

    toJson() {
        return this.JsonParser.parse(this.#xml, this.#DEFAULT_TO_JSON_OPTIONS);
    }

    toXml() {
        const parser = new this.XmlParser(this.#DEFAUL_TO_XML_OPTIONS);
        return parser.parse(this.#json);
    }
}

export default FXP;
