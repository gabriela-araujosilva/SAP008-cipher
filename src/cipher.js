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

    for (var i = 0; i < string.length; i++) { // vai somar sempre i ++ a cada loop até terminar a palavra
      var charCode = string.charCodeAt(i);
      var charCodeOffset = ((charCode - 65 + offset) % 26) + 65; //(charcode codigo da letra Asc - cod1letra + deslocamento offset) % tamanho do alfabeto) + cod1letra 65
//SEMPRE GUARDARO QUE VC VAI FAZER DENTRO DE UMA

      result = result + String.fromCharCode(charCodeOffset); //result que é la da variavel result, que esta vazia
      //var + result pq é ela que vai retornar o resultado 
      //charCodeOffset é o valor da var charCodeOffset

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
      var charCodeOffset = ((charCode + 65 - offset) % 26) + 65; // SOMAR charCode + cod1letra - deslocamento//
      result = result + String.fromCharCode(charCodeOffset);

    }

    return result;
  }
}

export default cipher;
