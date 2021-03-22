// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {

    //prompt user for password length
    //validate user input - if invalid then alert and prompt again, if valid then return
    var passwordLength = (function askForPasswordLength() {
      var userInput = prompt("Choose a password length between 8 and 128 characters:");
      if (userInput < 8 || userInput > 128 || isFinite(userInput) !== true) {
        window.alert("You must enter a number between 8 and 128. Please try again!");
        askForPasswordLength()
      }
      return userInput;
    })();

    //TESTING DELETE THIS AT THE END
    console.log(passwordLength)

    //ask user the questions sored in array "questions"
    //store results in array "answers"

    var characterTypes = (function checkCharacterTypes() {
      const questions = ["Include lowercase characters? Y/N", "Include uppercase characters? Y/N", "Include numeric characters? Y/N", "Include special characters? Y/N"]
      var answers = [];
      var i;
      for (i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i]);
          answers.push(answer)
      }
      return answers;
    })();

    //TESTING DELETE THIS AT THE END
    console.log(characterTypes);

    //generate a random number up to a specified value
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    
      const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
      const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const availableNumbers = "0123456789";
      const specialCharacters = "\!\#\$\%\&\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\}\~";
      const options = [alphabetLower, alphabetUpper, availableNumbers, specialCharacters];
      var randomString = "";
    
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);