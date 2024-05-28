const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultMessage = document.getElementById('resultMessage');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the correct number!';
        resultMessage.style.color = 'green';
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'Too high! Try again.';
        resultMessage.style.color = 'red';
    } else {
        resultMessage.textContent = 'Too low! Try again.';
        resultMessage.style.color = 'red';
    }
});
