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
  AddOffSet: function AddOffSet(charcode, offset){
    let OffSetCesar;
    let messageOffSet=[];
    for(OffSetCesar of charcode){
      if((OffSetCesar >= 65) && (OffSetCesar <= 90)){
          messageOffSet.push(((OffSetCesar - 65 + offset) % 26)+65);
      }
      else if((OffSetCesar >=97) && (OffSetCesar <=122)){
        messageOffSet.push(((OffSetCesar - 97 + offset) % 26)+97);
      }
      else{
        messageOffSet.push(OffSetCesar);
      }
    }
    return messageOffSet;
  },
  subtractTheOffset: function subtractTheOffset(charcode, offset){
    let subOffSetCesar;
    let messageSubOffSet=[];
    for(subOffSetCesar of charcode){
      if((subOffSetCesar >= 65) && (subOffSetCesar <= 90)){
        if(((subOffSetCesar - 65 - offset) % 26) >= 0){
          messageSubOffSet.push(((subOffSetCesar - 65 - offset) % 26)+65);
        }else{
          messageSubOffSet.push(((subOffSetCesar - 65 - offset) % 26)+91);
        }
      } else if((subOffSetCesar >=97) && (subOffSetCesar <=122)){
        if(((subOffSetCesar - 97 - offset) % 26) >= 0){
          messageSubOffSet.push(((subOffSetCesar - 97 - offset) % 26)+97);
        }else{
          messageSubOffSet.push(((subOffSetCesar - 97 - offset) % 26)+123);
        }
      }
        else{
        messageSubOffSet.push(subOffSetCesar)
      }
    }
    return messageSubOffSet;
  },
  encode: function encode(offset, text){
    if (typeof(offset)!= "number"){ 
      throw new TypeError;
    }
    if (typeof(text)!= "string"){ 
      throw new TypeError;
    } 
    var charcode = cipher.messageToCharcode(text);
    var messageAddOffSetCesar = cipher.AddOffSet(charcode,offset);
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
    var messageSubOffSet = cipher.subtractTheOffset(charcode,offset);
    var lettersMessage = cipher.AddOffSetCharcodeToLettersMessage(messageSubOffSet);
    return lettersMessage;
  }
}
export default cipher;