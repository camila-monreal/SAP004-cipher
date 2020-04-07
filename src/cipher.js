/* O usuário vai digitar esses parâmetros */
const text = " ";
const offset = " ";

/*Funções*/
function messageToCharcode(text){
  let index;
  let charcode=[];
  for(index in text){ 
    charcode.push(text.charCodeAt(index));
  }
  console.log(charcode)
  return charcode;
} 
function charcodeToMessage(charcode){
  let char;
  let message=[];
  for(char of charcode){ 
    message.push(String.fromCharCode(char));
    
  }
  console.log(message.join(""));
  return message;  
}
function addOffsetToCharcode(charcode, offset){
  var addOffSet;
  var messageAddOffset=[];
  for (addOffSet of charcode){
    messageAddOffset.push(parseInt(addOffSet) + parseInt(offset));
  }
  console.log(messageAddOffset);
  return messageAddOffset;
}
function AddOffSetCharcodeToLettersMessage(messageAddOffset){
  let charcodeToletters;
  let lettersMessage=[];
  for(charcodeToletters of messageAddOffset){
    lettersMessage.push(String.fromCharCode(charcodeToletters));
    
  }
  console.log(lettersMessage.join(""));
  return lettersMessage;
}
function subOffsetToCharcode(charcode, offset){
  var subOffSet;
  var messageSubOffset=[];
  for (subOffSet of charcode){
    messageSubOffset.push(parseInt(subOffSet) - parseInt(offset));
  }
  console.log(messageSubOffset);
  return messageSubOffset;
}

/* Codificar */
var charcode = messageToCharcode(text);
var messageAddOffset = addOffsetToCharcode(charcode,offset);
var lettersMessage = AddOffSetCharcodeToLettersMessage(messageAddOffset);
/* De-codificar */
var charcode = messageToCharcode(text);
var messageAddOffset = addOffsetToCharcode(charcode,-offset);
var lettersMessage = AddOffSetCharcodeToLettersMessage(messageAddOffset);