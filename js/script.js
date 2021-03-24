// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    //Constants containing different character types that can be used to generate the passwords
    const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const availableNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const specialChars = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', '\\', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '~']

    //variables that will be used by the generatePassword function
    var passwordLength = askForPasswordLength();
    var characterTypes = checkCharacterTypes();
    var characterPool = createCharacterPool();

    //TESTING DELETE THIS AT THE END
    console.log(passwordLength);
    console.log(characterTypes);
    console.log(characterPool);

    //Function that prompts user for password length
    //Validates user input - if invalid, then an alert is generated and the user is prompted again, if valid then return the user input
    function askForPasswordLength() {
      var userInput = prompt("Choose a password length between 8 and 128 characters:");
      if (userInput < 8 || userInput > 128 || isFinite(userInput) !== true) {
        window.alert("You must enter a number between 8 and 128. Please try again!");
        askForPasswordLength()
      }
      return userInput;
    }

    //Function that asks the user the set of questions stored in array "questions"
    //Stores the resulting boolean values in an array called "answers"
    //Returns the array called "answers"
    function checkCharacterTypes() {
      const questions = ["Include lowercase characters? Y/N", "Include uppercase characters? Y/N", "Include numeric characters? Y/N", "Include special characters? Y/N"]
      var answers = [];
      var i;
      for (i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i]);
          answers.push(answer)
      }
      return answers;
    }

    //Function that generates a random number
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    //Function that creates an array of characters based on the character types the user selected when function checkCharacterTypes was executed
    //Returns the combined array
    function createCharacterPool() {
      var nominatedCharacters = [];
      var passwordCharacters = [];

      function getRandomCharacter() {
        var randomInt = getRandomInt(arrayName.length);
        var randomLetter = arrayName[randomInt];
        passwordCharacters.push(randomLetter);
        console.log(passwordCharacters);
      }

      switch (true) {

        case (characterTypes[0]):
          nominatedCharacters = nominatedCharacters.concat(alphabetLower);
          var arrayName = alphabetLower;
          getRandomCharacter();

        case (characterTypes[1]): 
          nominatedCharacters = nominatedCharacters.concat(alphabetUpper);
          var arrayName = alphabetUpper;
          getRandomCharacter();

        case (characterTypes[2]):
          nominatedCharacters = nominatedCharacters.concat(availableNumbers);
          var arrayName = availableNumbers;
          getRandomCharacter();

        case (characterTypes[3]):
          nominatedCharacters = nominatedCharacters.concat(specialChars);
          var arrayName = specialChars;
          getRandomCharacter();

          break;
        default: 
          window.alert("You must select at least one character type. Please try again!");
          checkCharacterTypes();
      }
      console.log(passwordCharacters);
      return nominatedCharacters;
    }

    //Password must contain at least one character of each nominated type
    //This function selects one character at random from the array for each nominated type and stores it in a new array
    function getOneOfEachCharacterType() {
      
    }


  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);