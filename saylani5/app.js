let randomNumber = Math.floor(Math.random()*10) + 1;
function checkNumber() {
    let userGuess = document.getElementById('Guess').value;
    let guess = Number(userGuess);

    if (guess === randomNumber) {
        Swal.fire("Congratulations!", `You guessed it! The number was ${randomNumber}`, "success");
    } else if (guess > randomNumber) {
        Swal.fire("Too High!", "Try a smaller number", "info");
    } else if (guess < randomNumber) {
        Swal.fire("Too Low!", "Try a larger number", "info");
    }
    else{
        Swal.fire("Abnormal value!", "Try a number between 1 to 10", "info");
    }
}