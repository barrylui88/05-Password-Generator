// ALL VARIABLES/ARRAYS/OBJECTS

//// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

//// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

//// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

//// Introduction to Password Generator Message
let introMessage = "Welcome to my Password Generator! Please respond to the following series of questions and we will generate a password for you based on your criteria.";
//// Length of Password Variable
let lengthOfPassword = "";
//// Include Lowercase Characters Boolean
let includeLowercase = false;
//// Include Uppercase Characters Boolean
let includeUpperCase = false;
//// Include Numbers Boolean
let includeNumbers = false;
//// Include Special Characters Boolean
let includeSpecial = false;
//// Character Type Selection Array
let characterTypeArr = [];
//// Generated Password Character Array
let generatedPasswordArr = [];
//// Generated Password Variable
let generatedPassword = "";

// FUNCTIONS

//// Function to prompt user for password options
function getPasswordLength() {
  //// Ask for desired length of password
  lengthOfPassword = parseInt(prompt("Enter the number of digits for the generated password (between 10 and 64 inclusive)."));
  //// Check if desired length is a number AND between the specified range, otherwise ask again.
  if (lengthOfPassword < 10 || lengthOfPassword > 64) {
    alert("The number needs to be between 10 and 64 (inclusive). Please retry.");
    getPasswordLength();
    return;
  } else if (isNaN(lengthOfPassword)) {
    alert("The value entered is not a number. Please try.")
    getPasswordLength();
    return;
  };
}

//// Function to get Character Types
function getPasswordCharaterTypes() {
  //// Ask whether lowercase characters should be included
  //// Ask whether uppercase characters should be included
  //// Ask whether numbers should be included
  //// Ask whether special characters should be included
  //// Check whether at least one of the above is 'true'
  //// If not, display error and ask again
  //// Update the Character Type Selection Array
}

//// Function for getting a random element from an array
function getRandom(arr) {
  // Find the length of the array.
  let arrLength = arr.length;
  // Generate a random number and multiply it by the length of the array.
  let arrRandomIndex = Math.floor(Math.random() * arrLength);
  // Return the random number'th' index of that array.
  return arr[arrRandomIndex];
}

//// Function to generate password with user input
function generatePassword() {
  //// Generate a random number (range depends on which character types have been selected)
  //// Based on the number generated, convert it to an according character of that type.
  //// Update this as the Generated Password and return the value
}

//// CALL FUNCTIONS
//// Introduction to Password Generator
alert(introMessage);
getPasswordLength();
getPasswordCharaterTypes();

//// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

//// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);