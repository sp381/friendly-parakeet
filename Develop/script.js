// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  console.log(generateBtn)

// Assignment code here
function generatePassword() {
  var passwordString = ''
  var length = Number(prompt ("How long would you like your password to be?"))
  console.log(length)
  if (length <8 || length >128) {
    alert ("Must be greater than 8 characters and less than 128.")
    return 
  }
  
  //password character confirmations
  var lower = confirm("Would you like lowercase characters?")
  console.log(lower)
  var upper = confirm("Would you like uppercase characters?")
  console.log(upper)
  var numbers = confirm("Would you like numeric characters?")
  console.log(numbers)
  var characters = confirm("Would you like special characters?")
  console.log(characters)
  
  if (lower === false && upper === false && numbers === false && characters === false) {
    alert ("Please select at least one option.")
    return
  } 
  if (numbers === true){
    possibleCharacters = possibleCharacters += numbers
    specialCharacters = specialCharacters += numeric
  }

  return "passwordString"
}

// Write password to the #password input
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "1234567890";
let specialCharacters = "!@#$%^&*"
let possibleCharacters = []
let finalPassword = '';

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password").value;
  var value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$*&^%"
  passwordText.value = password;
  for(var i=0; i <=password; i++) {
    password = passwordText + value.charAt(Math.floor(Math.random() * Math.floor(value.length-1)));
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

