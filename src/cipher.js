/*Functions*/
const cipher = {
  messageToCharcode: function messageToCharcode(text){
    let index;
    let charcode=[];
    for(index in text){ 
      charcode.push(text.charCodeAt(index));
    }
    return charcode;
  }, 
  AddOffSetCharcodeToLettersMessage: function AddOffSetCharcodeToLettersMessage(messageAddOffset){
    let charcodeToletters;
    let lettersMessage=[];
    for(charcodeToletters of messageAddOffset){
      lettersMessage.push(String.fromCharCode(charcodeToletters));
    }
    return lettersMessage.join("");
  },
  cipherOffSet: function cipherOffSet(charcode, offset){
    var addOffSetCesar;
    var messageAddOffSetCesar=[];
    for (addOffSetCesar of charcode){
      messageAddOffSetCesar.push(((addOffSetCesar - 65 + offset) % 26) +65);
    }
    return messageAddOffSetCesar;
  },
  decipherOffSet: function decipherOffSet(charcode, offset){
    var subOffSetCesar;
    var messageSubOffSetCesar=[];
    for (subOffSetCesar of charcode){
      if (((subOffSetCesar - 65 - offset) % 26) >= 0){
        messageSubOffSetCesar.push(((subOffSetCesar - 65 - offset) % 26)+65);
      }else{
        messageSubOffSetCesar.push(((subOffSetCesar - 65 - offset) % 26) +91);
      }
    }
    return messageSubOffSetCesar;
  },
  encode: function encode(offset, text){
    if (typeof(offset)!= "number"){ 
      throw new TypeError;
    }
    if (typeof(text)!= "string"){ 
      throw new TypeError;
    } 
    var charcode = cipher.messageToCharcode(text);
    var messageAddOffSetCesar = cipher.cipherOffSet(charcode,offset);
    var lettersMessage = cipher.AddOffSetCharcodeToLettersMessage(messageAddOffSetCesar);
    return lettersMessage;
  },
  decode: function decode(offset,text){
    if (typeof(offset)!= "number"){ 
      throw new TypeError;
    }
    if (typeof(text)!= "string"){ 
      throw new TypeError;
    }
    var charcode = cipher.messageToCharcode(text);
    var messageAddOffSetCesar = cipher.decipherOffSet(charcode,offset);
    var lettersMessage = cipher.AddOffSetCharcodeToLettersMessage(messageAddOffSetCesar);
    return lettersMessage
  }
}
export default cipher;