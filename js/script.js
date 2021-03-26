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
    var partialArray = getRandomOfEachNominatedType();

    //Prompt user for password length and validate input
    function askForPasswordLength() {
      var passwordLength = prompt("Choose a password length between 8 and 128 characters:");
      while (passwordLength < 8 || passwordLength > 128 || isFinite(passwordLength) !== true) {
        window.alert("You must enter a number between 8 and 128. Please try again!");
        passwordLength = askForPasswordLength();
      }
      return passwordLength;
    }

    //Confirm if user wants each character type (lower, upper, numeric, special) and validate input
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

    //Create an array containing all of the character set arrays
    function createCharacterArrays(){
      var characterArrays = new Array ();
      characterArrays[0] = new Array (...alphabetLower);
      characterArrays[1] = new Array (...alphabetUpper);
      characterArrays[2] = new Array (...numericCharacters);
      characterArrays[3] = new Array (...specialCharacters);
      return characterArrays;
    }

    //Create a pool containing just the character types that the user has confirmed they want to include
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

    //generate a random number
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    //Randomly select one of each character type nominated by the user
    function getRandomOfEachNominatedType() {
      var partialArray = [];
      for (let i = 0; i < characterTypeChoices.length; i++) {
        var choice = characterTypeChoices[i];
        var randomInt = getRandomInt(characterArrays[i].length);
        if (choice == true) {
          partialArray.push(characterArrays[i][randomInt]);
        }   
      }
      return partialArray;
    }

    var remainder = (passwordLength - partialArray.length);

    //Fill remainder of array with randomly selected characters from character pool
    //Assign results to variable "completeArray"
    var completeArray =  getCompleteArray();
    function getCompleteArray() {
        for (let i = 0; i < remainder; i++) {
            var randomIndex = getRandomInt(characterPool.length);
            var randomChar = characterPool[randomIndex];
            partialArray.push(randomChar)
            }
        return partialArray;
    }

    //function to shuffle array so that the characters generated from getRandomOfEachNominatedType can occur at any index array, not just at the beginning
    var passwordArray = getShuffledArray();
    function getShuffledArray() {
        var passwordArray = [];
        for (let i = completeArray.length; i > 0; i--) {
            var randomIndex = getRandomInt(completeArray.length);
            passwordArray.splice(randomIndex, 0, completeArray[randomIndex]);
            completeArray.splice(randomIndex, 1)
            }
        return passwordArray;
    }
 
    //convert array to string
    password = passwordArray.join("");
    return password; 

  }
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);