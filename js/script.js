// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {

    const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', '\\', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '~']

    var passwordLength = askForPasswordLength();
    var characterTypeChoices = getCharacterTypeChoices();
    var characterArrays = createCharacterArrays();
    var characterPool = createCharacterPool();
    var randomNumbers = getRandomNumbers();
    var passwordArray = createPasswordArray();

    //Prompt user for desired password length and validate input
    
    function askForPasswordLength() {
      var passwordLength = prompt("Choose a password length between 8 and 128 characters:");
      while (passwordLength < 8 || passwordLength > 128 || isFinite(passwordLength) !== true) {
        window.alert("You must enter a number between 8 and 128. Please try again!");
        passwordLength = askForPasswordLength();
      }
      return passwordLength;
    }

    //TESTING DELETE LATER
    console.log(passwordLength);

    //Confirm with user if they want each character type (lower, upper, numeric, special) and validate input
    function getCharacterTypeChoices() {
      const questions = ["Include lowercase characters? Click 'OK' for Yes, 'Cancel' for No", "Include uppercase characters? Click 'OK' for Yes, 'Cancel' for No", "Include numeric characters? Click 'OK' for Yes, 'Cancel' for No", "Include special characters? Click 'OK' for Yes, 'Cancel' for No"]
      var characterTypeChoices = [];
      for (let i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i]);
        characterTypeChoices.push(answer);
      }
      if (characterTypeChoices.includes(true) == false) {
        window.alert("You must select at least one character type. Please try again!");
        characterTypeChoices = getCharacterTypeChoices();
      }
      return characterTypeChoices;
    }
    
    //TESTING DELETE LATER
    console.log(characterTypeChoices);

    //At this point we have an array of random numbers that is the length of the password
    //We have to go through it and use each number to generate a random character


    function createCharacterArrays(){
      var characterArrays = new Array ();
      characterArrays[0] = new Array (...alphabetLower);
      characterArrays[1] = new Array (...alphabetUpper);
      characterArrays[2] = new Array (...numericCharacters);
      characterArrays[3] = new Array (...specialCharacters);
      return characterArrays;
    }
    
    //TESTING DELETE LATER 
    console.log(characterArrays);

    //Create a pool containing all the characters that the user has confirmed they want to include in the password
    function createCharacterPool() {
      var characterPool = [];
      for (let i = 0; i < characterTypeChoices.length; i++) {
        var choice = characterTypeChoices[i];
        if(choice == true) {
          characterPool.push(...characterArrays[i]);
        }
      }
      return characterPool;
    }

    //TESTING DELETE LATER
    console.log(characterPool);

    //Function that generates a random number
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    //function that makes an array of random numbers the same length as the password length the user specified
    function getRandomNumbers(){
      var randomNumbers = [];
      for (let i = 0; i < passwordLength; i++) {
        var randomNumber = getRandomInt(characterPool.length);
        randomNumbers.push(randomNumber);
      }
      return randomNumbers;
    }

    //TESTING DELETE LATER  
    console.log(randomNumbers);

    function createPasswordArray() {
      var passwordArray = [];
      for (let i = 0; i < randomNumbers.length; i++) {
        var randomIndex = randomNumbers[i];
        passwordArray.push(characterPool[randomIndex])
      }
      return passwordArray;
    }

    //TESTING DELETE LATER
    console.log(passwordArray);

    password = passwordArray.join("");
    return password; 

  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
