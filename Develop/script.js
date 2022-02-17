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
  var lowercase = confirm("Would you like lowercase characters?")
  console.log(lowercase)
  var uppercase = confirm("Would you like uppercase characters?")
  console.log(uppercase)
  var numeric = confirm("Would you like numeric characters?")
  console.log(numeric)
  var uppercase = confirm("Would you like special characters?")
  
  if (lowercase === false && uppercase === false) {
    alert ("Please select at least one option.")
    return
  }

  return passwordString
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  console.log(generateBtn)

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

