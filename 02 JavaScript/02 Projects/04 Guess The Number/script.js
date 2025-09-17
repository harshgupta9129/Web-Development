const num = Math.floor(Math.random()*100);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    }) 
}

function validateGuess (guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 0) {
        alert('Please Enter Number Greater Than 0')
    } else if (guess > 99) {
        alert('Please Enter A Number Less Than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${num}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess == num) {  
        displayMessage(`You guessed it right`)
        endGame();
    } else if (guess < num) {
        displayMessage(`Number is Low`);
    } else {
        displayMessage(`Number is High`)
    }
}

function displayGuess (guess) {
    userInput.value = ''
    guessSlot.innerHTML = prevGuess
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage (message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame () {
    
}

function newGame () {

}