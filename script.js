// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function generatePassword(upperChoice,lowerChoice,numChoice,specialChoice,passLength) {
  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numbers = ["0123456789"];
  var specialChar = [" !#$%&'()*+,-./:;<=>?@[]\^_`{}|~"];
  var lowerSplit = lowerCase.toString().split("");
  var upperSplit = upperCase.toString().split("");
  var numSplit = numbers.toString().split("");
  var specialSplit = specialChar.toString().split("");
  
  var totalCharsArray = [];
  if (upperChoice==true) {
    totalCharsArray = totalCharsArray.concat(upperSplit);
  } if (upperChoice==false) {};
  
  if (lowerChoice==true) {
    totalCharsArray = totalCharsArray.concat(lowerSplit);
  } if (lowerChoice==false) {};

  if (numChoice==true) {
    totalCharsArray = totalCharsArray.concat(numSplit);
  } if (numChoice==false) {}; 

  if (specialChoice==true) {
    totalCharsArray = totalCharsArray.concat(specialSplit);
  } if (specialChoice==false) {};

  console.log(totalCharsArray);

  var returnValue = "";
  var i;
  for (i=0; i < passLength; i++) {
    returnValue += totalCharsArray[Math.floor(Math.random()*totalCharsArray.length)];
  };

  return returnValue;
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword(upperChoice,lowerChoice,numChoice,specialChoice,passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
