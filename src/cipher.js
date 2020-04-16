/*Functions*/
const cipher = {
  messageToArrayCharcodes: function messageToArrayCharcodes(text){
    let index;
    let arrayCharcodes=[];
    for(index in text){ 
      arrayCharcodes.push(text.charCodeAt(index));
    }
    return arrayCharcodes;
  }, 
  arrayTomessage: function arrayTomessage(arrayCharcodesAddOffSet){
    let array;
    let message=[];
    for(array of arrayCharcodesAddOffSet){
      message.push(String.fromCharCode(array));
    }
    return message.join("");
  },
  AddOffSetToArray: function AddOffSetToArray(arrayCharcodes, offset){
    let array;
    let arrayCharcodesAddOffSet=[];
    for(array of arrayCharcodes){
      if((array >= 65) && (array <= 90)){
        arrayCharcodesAddOffSet.push(((array - 65 + offset) % 26)+65);
      }
      else if((array >=97) && (array <=122)){
        arrayCharcodesAddOffSet.push(((array - 97 + offset) % 26)+97);
      }
      else{
        arrayCharcodesAddOffSet.push(array);
      }
    }
    return arrayCharcodesAddOffSet;
  },
  subtractOffSet: function subtractOffSet(arrayCharcodes, offset){
    let array;
    let arraySubOffSet=[];
    for(array of arrayCharcodes){
      if((array >= 65) && (array <= 90)){
        if(((array - 65 - offset) % 26) >= 0){
          arraySubOffSet.push(((array - 65 - offset) % 26)+65);
        }else{
          arraySubOffSet.push(((array - 65 - offset) % 26)+91);
        }
      } else if((array >=97) && (array <=122)){
        if(((array - 97 - offset) % 26) >= 0){
          arraySubOffSet.push(((array - 97 - offset) % 26)+97);
        }else{
          arraySubOffSet.push(((array - 97 - offset) % 26)+123);
        }
      }
        else{
          arraySubOffSet.push(array);
      }
    }
    return arraySubOffSet;
  },
  encode: function encode(offset, text){
    if (typeof(offset)!= "number"){ 
      throw new TypeError;
    }
    if (typeof(text)!= "string"){ 
      throw new TypeError;
    } 
    let arrayCharcodes = cipher.messageToArrayCharcodes(text);
    let arrayCharcodesAddOffSet = cipher.AddOffSetToArray(arrayCharcodes, offset);
    let message = cipher.arrayTomessage(arrayCharcodesAddOffSet);
    return message;
  },
  decode: function decode(offset,text){
    if (typeof(offset)!= "number"){ 
      throw new TypeError;
    }
    if (typeof(text)!= "string"){ 
      throw new TypeError;
    }
    let arrayCharcodes = cipher.messageToArrayCharcodes(text);
    let arraySubOffSet = cipher.subtractOffSet(arrayCharcodes,offset);
    let message = cipher.arrayTomessage(arraySubOffSet);
    return message;
  }
}
export default cipher;