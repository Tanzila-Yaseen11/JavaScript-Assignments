// Question No 01. 
var positiveNum = parseFloat(prompt("Enter a positive integer:"));
document.write("<h2>1. Positive Integer Operations</h2>");
document.write("Number: " + positiveNum + "<br>");
document.write("Round off: " + Math.round(positiveNum) + "<br>");
document.write("Floor value: " + Math.floor(positiveNum) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveNum) + "<br>");

// Question No 02.
var negativeNum = parseFloat(prompt("Enter a negative floating point number:"));
document.write("<h2>2. Negative Floating Point Operations</h2>");
document.write("Number: " + negativeNum + "<br>");
document.write("Round off: " + Math.round(negativeNum) + "<br>");
document.write("Floor value: " + Math.floor(negativeNum) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeNum) + "<br>");

// Question No 03. 
var userNumber = parseFloat(prompt("Enter any number to find its absolute value:"));
document.write("<h2>3. Absolute Value</h2>");
document.write("Absolute value of " + userNumber + " is: " + Math.abs(userNumber) + "<br>");

// Question No 04. 
document.write("<h2>4. Dice Roll Simulation</h2>");
var diceRoll = Math.floor(Math.random() * 6) + 1;
document.write("You rolled a dice: " + diceRoll + "<br>");

// Question No 05.
document.write("<h2>5. Coin Toss Simulation</h2>");
var coinToss = Math.floor(Math.random() * 2) + 1;
var coinResult = (coinToss === 1) ? "Heads" : "Tails";
document.write("Coin toss result: " + coinResult + "<br>");

// Question No 06. 
document.write("<h2>6. Random Number (1-100)</h2>");
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNumber + "<br>");

// Question No 07. 
var userWeight = prompt("Enter your weight:");
document.write("<h2>7. User Weight</h2>");
var parsedWeight = parseFloat(userWeight);
document.write("Your weight is: " + parsedWeight + " kgs<br>");

// Question No 08. 
document.write("<h2>8. Secret Number Game</h2>");
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (1 to 10):"));
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number: " + secretNumber + "<br>");
} else {
    document.write("Sorry, the secret number was: " + secretNumber + ". Better luck next time!<br>");
}
