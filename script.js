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

var passLength = prompt("How many characters long would you like your password to be? (You must pick a value higher than 7 and lower than 129)");

if (passLength<8) {
  alert("Your password must be at least 8 characters");
  var passLength = prompt("How many characters long would you like your password to be? (You must pick a value higher than 7 and lower than 129)");
} if (passLength>128) {
  alert("Your password cannot be longer than 128 characters");
  var passLength = prompt("How many characters long would you like your password to be? (You must pick a value higher than 7 and lower than 129)");
} else {};

console.log(passLength);

var upperChoice = confirm("Do you want upper case letters? (Ok for yes, and cancel for no)");
var lowerChoice = confirm("Do you want lower case letters? (Ok for yes, and cancel for no)");
var numChoice = confirm("Do you want numbers in your password? (Ok for yes, and cancel for no)");
var specialChoice = confirm("Do you want special characters in your password? (For example: ! or & or , etc.) (Ok for yes, and cancel for no)");

if (upperChoice===false && lowerChoice===false && numChoice===false && specialChoice===false) {
  alert("You must to select a paramenter, try again");
  location.reload();
};

console.log(upperChoice);
console.log(lowerChoice);
console.log(numChoice);
console.log(specialChoice);

function getRandomLower() {
  return lowerSplit[Math.floor(Math.random()*26)]
};

function getRandomUpper() {
  return upperSplit[Math.floor(Math.random()*26)]
};

function getRandomNumber() {
  return numSplit[Math.floor(Math.random()*10)]
};

function getRandomSymbol() {
  return specialSplit[Math.floor(Math.random()*31)]
};

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

function generatePassword(upperChoice,lowerChoice,numChoice,specialChoice) {

  console.log(upperChoice);
  var functionsArray = [];
  if (upperChoice==true) {
    functionsArray.push(getRandomUpper);
  } if (upperChoice==false) {};
  
  if (lowerChoice==true) {
    functionsArray.push(getRandomLower);
  } if (lowerChoice==false) {};

  if (numChoice==true) {
    functionsArray.push(getRandomNumber);
  } if (numChoice==false) {}; 

  if (specialChoice==true) {
    functionsArray.push(getRandomSymbol);
  } if (specialChoice==false) {};

  console.log(functionsArray);
};

// Write password to the #password input
function writePassword(upperChoice,lowerChoice,numChoice,specialChoice) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
