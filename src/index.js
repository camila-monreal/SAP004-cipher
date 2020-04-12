/*Code and Decode functions*/
import cipher from './cipher.js';

function encodeCesar(){
  let text = document.getElementById("message");
  let offset = document.getElementById("offset");
  var encode = cipher.encode(Number(offset.value), text.value);
  text.value=encode;
}
function decodeCesar(){
  let text = document.getElementById("message");
  let offset = document.getElementById("offset");
  var decode = cipher.decode(Number(offset.value), text.value);
  text.value=decode;
}
let codeButton = document.getElementById("codeButton");
codeButton.addEventListener("click", encodeCesar);  
let decodeButton = document.getElementById("decodeButton");
decodeButton.addEventListener("click", decodeCesar); 
