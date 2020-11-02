// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var specialChar = [" !#$%&'()*+,-./:;<=>?@[]\^_`{}|~"];
var lowerSplit = lowerCase.toString().split("");
var upperSplit = upperCase.toString().split("");
var numSplit = numbers.toString().split("");
var specialSplit = specialChar.toString().split("");

console.log(lowerSplit);
console.log(upperSplit);
console.log(numSplit);
console.log(specialSplit);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
