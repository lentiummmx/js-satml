import ISatByteCode from './ISatByteCode';

abstract class SatByteCode implements ISatByteCode {
    #tag:string;
    #length:string;
    #attribute:string;
    #value:string;

    constructor() {
        #tag = null;
        #length = null;
        #attribute = null;
        #value = null;
    }

    getByteCode() {
        throw new Error('method getByteCode not implemented');
    }

}

export default SatByteCode;
