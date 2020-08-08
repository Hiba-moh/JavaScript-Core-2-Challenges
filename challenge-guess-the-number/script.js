// Hi from Gintaras
// Hi from Hadiyah
//Hi from Hiba
// Hi from Gabriel
//Hi Ebenezer
let numberOfTries = 7;
let randomNumber = getRandomNum ();
let message = document.querySelector ('.final-output');
let triesLeft = document.querySelector ('.Tries-output');
function getRandomNum () {
  return Math.floor (Math.random () * 100 + 1);
}
function guessNumber () {
  //Collect input from the user
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  let guess = document.querySelector ('.inputs-Values').value;
  if (guess < 1 || guess === '' || guess > 100) {
    message.textContent = 'Please provide a number between 1 and 100';
    return;
  }
  if (numberOfTries <= 7 && numberOfTries > 0) {
    numberOfTries--;
  }
  triesLeft.textContent = `You have ${numberOfTries} tries left`;
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  if (guess == randomNumber) {
    message.textContent = `${randomNumber} Guess is correct. You win! It took you ${7-numberOftries} tries`;
  } else if (guess > randomNumber) {
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print
    message.textContent = 'Number is too high, try again';
  } else {
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    message.textContent = ' Number is too low, try again';
  }
  if (numberOfTries <= 0) {
    message.textContent = `Sorry You Lost, the number was ${randomNumber}`;
  }
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame () {
  randomNumber = getRandomNum ();
  let guess = document.querySelector ('.inputs-Values');
  guess.value = '';
  message.textContent = '';
  triesLeft.textContent = '';
  numberOfTries = 7;
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents (e) {
  if (e.keyCode === 13) {
    guessNumber ();
  }
}

document.querySelector ('.btnNewGame').addEventListener ('click', newGame);
document.querySelector ('.btnGuess').addEventListener ('click', guessNumber);
document.addEventListener ('keypress', keyBoardEvents);
