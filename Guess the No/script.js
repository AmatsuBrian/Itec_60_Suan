const minNumber = 1;
const maxNumber = 100;
const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attemptsCount = 0;
let userGuess;
let gameRunning = true;

while (gameRunning) {
    userGuess = window.prompt(`Guess a number between ${minNumber} - ${maxNumber}`);
    userGuess = Number(userGuess);
    
    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
        window.alert("Please enter a valid number within the specified range.");
    } else {
        attemptsCount++;
        if (userGuess < secretNumber) {
            window.alert("Sheeesh TOO LOW! TRY AGAIN!");
        } else if (userGuess > secretNumber) {
            window.alert("Super duper TOO HIGH! TRY AGAIN!");
        } else {
            window.alert(`CORRECT! The Hidden number was ${secretNumber}. It took you ${attemptsCount} attempts.`);
            gameRunning = false;
        }
    }
}
