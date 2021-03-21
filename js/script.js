// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {

    function askForPasswordLength() {
      //propmt user for input and assign it to variable passwordLength
      var passwordLength = prompt("Choose a password length between 8 and 128 characters:");
      
      //check if user input is valid (a number between 8 and 128)
      //if not valid, alert and prompt again
      if (passwordLength < 8 || passwordLength > 128 || isFinite(passwordLength) !== true) {
        window.alert("You must enter a number between 8 and 128. Please try again!");
        askForPasswordLength()
      }
    }

    //invoke function
    askForPasswordLength()

    //declaring arrays
      var questions = ["Include lowercase characters? Y/N", "Include uppercase characters? Y/N", "Include numeric characters? Y/N", "Include special characters? Y/N"]
      var answers = [];

    //ask user the questions sored in array "questions"
    //convert the answers to boolean
    //store results in array "answers"
      var i;
      for (i = 0; i < questions.length; i++) {
        var answer = prompt(questions[i]);
        answer = answer.toUpperCase();
        if (answer === "Y" || answer === "YES"){
          answer = true;
          answers.push(answer)
        } else if (answer === "N" || answer === "NO"){
          answer = false;
          answers.push(answer)
        } else {
          window.alert("Please enter either 'Y' or 'N'")
          prompt(questions[i]);
      }

      console.log(answers)

  }
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Pseudocode
//When the user clicks the "generate" button
//A prompt is generated asking for the desired password length
//when length is entered
//if length is < 8 or > 128 or null, then an error is pasted to the textarea element and script breaks
//else user is asked to confirm if they want lowercase characters, then
//user is asked to confirm if they want uppercase chars
//user is asked to confirm if they want numeric chars
//user is asked to confirm if the ywant special chars
//based on results, password should be generated