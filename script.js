
let secretNumber = Math.floor(Math.random() * 20) + 1;

let attempts = 5;
let score = 0;
let gameOver = false;

function checkGuess() {

    if (gameOver) return;

    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (guess < 1 || guess > 20 || !Number.isInteger(guess)) {
        message.innerText = "Please enter a number between 1 and 20!";
        message.className = "error";
        return;
    }

    attempts--;

    document.getElementById("attempts").innerText = attempts;

    if (guess === secretNumber) {

        message.innerText = "🎉 Correct! You Won! 🏆";
        message.className = "success";

        score += attempts + 1;
        document.getElementById("score").innerText = score;

        gameOver = true;

    } else if (guess > secretNumber) {

        message.innerText = "📈 Too High! Try Again.";
        message.className = "error";

    } else {

        message.innerText = "📉 Too Low! Try Again.";
        message.className = "error";
    }

    if (attempts === 0 && guess !== secretNumber) {
        message.innerText = "😢 Game Over! Number was " + secretNumber;
        gameOver = true;
    }

    if (gameOver) {
        document.getElementById("checkBtn").disabled = true;
    }

    document.getElementById("guessInput").value = "";
}

function restartGame() {

    secretNumber = Math.floor(Math.random() * 20) + 1;

    attempts = 5;
    gameOver = false;

    document.getElementById("attempts").innerText = attempts;
    document.getElementById("message").innerText = "Good Luck! 😊";
    document.getElementById("message").className = "";

    document.getElementById("guessInput").value = "";

    document.getElementById("checkBtn").disabled = false;
}
