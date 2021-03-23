// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {

    const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const availableNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const specialChars = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', '\\', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '~']

    var passwordLength = askForPasswordLength();
    var characterTypes = checkCharacterTypes();
    var characterPool = createCharacterPool();

    //TESTING DELETE THIS AT THE END
    console.log(passwordLength);
    console.log(characterTypes);
    console.log(characterPool);

    //prompt user for password length
    //validate user input - if invalid then alert and prompt again, if valid then return
    function askForPasswordLength() {
      var userInput = prompt("Choose a password length between 8 and 128 characters:");
      if (userInput < 8 || userInput > 128 || isFinite(userInput) !== true) {
        window.alert("You must enter a number between 8 and 128. Please try again!");
        askForPasswordLength()
      }
      return userInput;
    }

    //ask user the questions sored in array "questions"
    //store results in array "answers"
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

    function createCharacterPool() {
      var nominatedCharacters = [];
      switch (true) {
        case (characterTypes[0]):
          nominatedCharacters = nominatedCharacters.concat(alphabetLower);
        case (characterTypes[1]): 
          nominatedCharacters = nominatedCharacters.concat(alphabetUpper);
        case (characterTypes[2]):
          nominatedCharacters = nominatedCharacters.concat(availableNumbers);
        case (characterTypes[3]):
          nominatedCharacters = nominatedCharacters.concat(specialChars);
          break;
        default: 
          window.alert("You must select at least one character type. Please try again!");
          checkCharacterTypes();
      }
      return nominatedCharacters;
    }

  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);