const cipher = {
  encode: (offset, string) => {
    if (typeof offset === "undefined") throw new TypeError();
    if (typeof string === "undefined") throw new TypeError();

    if (offset === null) throw new TypeError();
    if (string === null) throw new TypeError();

    if (typeof offset === typeof []) throw new TypeError();
    if (typeof string === typeof []) throw new TypeError();

    if (offset === 0) throw new TypeError();
    if (string === 0) throw new TypeError();

    var result = "";
    
    for (let i = 0; i < string.length; i++) {
      let charCode = string.charCodeAt(i);
      let charCodeOffset = ((charCode - 65 + offset) % 26) + 65;


      result = result + String.fromCharCode(charCodeOffset);

    }

    return result;
  },


  decode: (offset, string) => {
    if (typeof offset === "undefined") throw new TypeError();
    if (typeof string === "undefined") throw new TypeError();

    if (offset === "null") throw new TypeError();
    if (string === "null") throw new TypeError();

    if (typeof offset === typeof []) throw new TypeError();
    if (typeof string === typeof []) throw new TypeError();

    if (offset === 0) throw new TypeError();
    if (string === 0) throw new TypeError();

    let result = "";
    
    for (let i = 0; i < string.length; i++) {
      let charCode = string.charCodeAt(i);
      let charCodeOffset = ((charCode - 90 - offset) % 26) + 90;                                  
      result = result + String.fromCharCode(charCodeOffset);

    }

    return result;
  }
}

export default cipher;
