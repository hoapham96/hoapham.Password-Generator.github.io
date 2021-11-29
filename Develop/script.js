// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

function generatePassword() {
  var  chars = upper + lower + number + symbol;
  var passwordLength = 12;
  var passwordText = "";

 for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  passwordText += chars.substring(randomNumber, randomNumber+1);
 }
 console.log(passwordText);
 return passwordText
}
 