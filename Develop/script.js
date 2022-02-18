// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  var lower = false
  var upper = false
  var numbers = false
  var characters = false

  function checkCriteria () {
    lower = confirm("Would you like lowercase characters?")
    upper = confirm("Would you like uppercase characters?")
    numbers = confirm("Would you like numeric characters?")
    characters = confirm("Would you like special characters?")
  }
// Assignment code here
function generatePassword() {
  var passwordString = ''
  var length = Number(prompt ("How long would you like your password to be?"))
  if (length <8 || length >128) {
    alert ("Must be greater than 8 characters and less than 128.")
    return 
  }

  //password character confirmations
  checkCriteria()
  
  if (lower == false && upper == false && numbers == false && characters == false) {
    alert ("Please select at least one option.")
    checkCriteria()   
}
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "1234567890";
let specialCharacters = "!#$%&()*+,-./:;<=>?@^_`";

if (lower) passwordString = passwordString + lowerCase
if (upper) passwordString = passwordString + uppercase
if (numbers) passwordString = passwordString + numeric
if (characters) passwordString = passwordString + specialCharacters
var randPassword = '';
var charCount = 0;
var numCount = 0;
for (var i = 0; i < length; i++) {
  // If random bit is 0, generate a numeric value. 
  if ((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
    var rnum = Math.floor(Math.random() * 10);
    randPassword += rnum;
    numCount += 1;
  } else {
    // If any of the above criteria fail, generate an alpha character from the passwordChars string
    var rnum = Math.floor(Math.random() * passwordString.length);
    randPassword += passwordString.substring(rnum, rnum + 1);
    charCount += 1;
  }
}
console.log(randPassword)
console.log(passwordString)

return randPassword
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);