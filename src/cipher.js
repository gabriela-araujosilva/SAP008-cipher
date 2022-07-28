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
    console.log(offset);
    console.log(string);
    var result = "";

    for (var i = 0; i < string.length; i++) {
      var charCode = string.charCodeAt(i);
      var charCodeOffset = ((charCode - 65 + offset) % 26) + 65;


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

    var result = "";

    for (var i = 0; i < string.length; i++) {
      var charCode = string.charCodeAt(i);
      var charCodeOffset = ((charCode - 90 - offset) % 26) + 90;                                  // SOMAR charCode + cod1letra - deslocamento//
      result = result + String.fromCharCode(charCodeOffset);

    }

    return result;
  }
}

export default cipher;
