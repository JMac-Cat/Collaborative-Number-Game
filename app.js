let randomNum = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", checkGuess)

function checkGuess() {
    if (randomNum < 5) {
        alert("Your guess is too low");
    } else if (randomNum > 6) {
        alert("Your guess is too high");
    } else {
        alert("You guessed correctly");
    }
}