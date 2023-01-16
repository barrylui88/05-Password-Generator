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

//// Length of Password Variable
let lengthOfPassword = "";
//// Include Lowercase Characters Boolean
let includeLowercase = false;
//// Include Uppercase Characters Boolean
let includeUppercase = false;
//// Include Numbers Boolean
let includeNumbers = false;
//// Include Special Characters Boolean
let includeSpecial = false;
//// Character Type Selection Array
let characterTypeArr = [];
//// Generated Character Types Array
let generatedCharacterTypesArr = [];
//// Generated Password Array
let generatedPasswordArray = [];
//// Generated Password Variable
let generatedPassword = "";

// FUNCTIONS

//// Function for getting a random element from an array
function getRandom(arr) {
  // Find the length of the array.
  let arrLength = arr.length;
  // Generate a random number and multiply it by the length of the array.
  let arrRandomIndex = Math.floor(Math.random() * arrLength);
  // Return the random number'th' index of that array.
  return arr[arrRandomIndex];
}

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
    alert("The value entered is not a number. Please retry.")
    getPasswordLength();
    return;
  };
}

//// Function to get Character Types
function getPasswordCharacterTypes() {
  characterTypeArr = [];
  //// Ask whether lowercase characters should be included
  includeLowercase = confirm("Should the password include lowercase letters?\n(Select \"OK\" if YES, or select \"Cancel\" if NOT.)");
  if (includeLowercase) {includeLowercase = "LC"};
  //// Ask whether uppercase characters should be included
  includeUppercase = confirm("Should the password include uppercase letters?\n(Select \"OK\" if YES, or select \"Cancel\" if NOT.)");
  if (includeUppercase) {includeUppercase = "UC"};
  //// Ask whether numbers should be included
  includeNumbers = confirm("Should the password include numbers?\n(Select \"OK\" if YES, or select \"Cancel\" if NOT.)");
  if (includeNumbers) {includeNumbers = "NU"};
  //// Ask whether special characters should be included
  includeSpecial = confirm("Should the password include special characters?\n(Select \"OK\" if YES, or select \"Cancel\" if NOT.)");
  if (includeSpecial) {includeSpecial = "SP"};
  //// Check whether at least one of the above is 'true'
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    //// If not, display error and ask again
    alert("You must include one of the character types. Please select at least one of them.");
    getPasswordCharacterTypes();
    return;
  } else {
  //// Update the Character Type Selection Array
  characterTypeArr.push(includeLowercase);
  characterTypeArr.push(includeUppercase);
  characterTypeArr.push(includeNumbers);
  characterTypeArr.push(includeSpecial);
  characterTypeArr = characterTypeArr.filter(Boolean);
  }
}

function getAllCharacterTypes () {
  generatedCharacterTypesArr = [];
  //// Generate a random number (range depends on number of character types selected) for each index of the generated password array.
  for (i=0; i<lengthOfPassword; i++) {
    generatedCharacterTypesArr.push(Math.floor(Math.random()*characterTypeArr.length));
  }
  //// Check that every character type specified has been picked, otherwise rerun.
  let uniqueChars = [...new Set(generatedCharacterTypesArr)];
  if (uniqueChars.length < characterTypeArr.length) {
    generatedCharacterTypesArr = [];
    getAllCharacterTypes();
    return;
  }
}

function mapAllCharacters() {
  generatedPassword = "";
  //// Based on the number generated, convert it to an according character of that type.
  generatedPasswordArray = generatedCharacterTypesArr.map(mapCharacterType);
  generatedPasswordArray = generatedPasswordArray.map(mapCharacter);
  //// Update this as the Generated Password and return the value
  generatedPassword = generatedPasswordArray.join("");
  //// Return the generated password
  return generatedPassword;
}

//// Callback Function to map random number to random character type.
function mapCharacterType (x) {
  return characterTypeArr[x];
}

//// Callback Function to map character type to random character of that type.
function mapCharacter (x) {
  if (x == "LC") {
    return getRandom(lowerCasedCharacters);
  } else if (x == "UC") {
    return getRandom(upperCasedCharacters);
  } else if (x == "NU") {
    return getRandom(numericCharacters);
  } else if (x == "SP") {
    return getRandom(specialCharacters);
  }
}

//// Function to generate password with user input
function generatePassword() {
  getPasswordLength();
  getPasswordCharacterTypes();
  getAllCharacterTypes();
  mapAllCharacters();
  return mapAllCharacters();
}

// LINKS TO HTML

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