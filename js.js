var p1Buttuon = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winnigScore = 5;

var reset = document.getElementById('reset');
var pWinner = document.getElementById('pWinner');

p1Buttuon.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winnigScore) {
            gameOver = true;
            pWinner.innerHTML = "Player 1 has Won! Gratz!";
        }
        p1Display.innerHTML = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++
    }
    if (p2Score === winnigScore) {
        gameOver = true;
        pWinner.innerHTML = "Player 2 has Won! Gratz!";
    }
    p2Display.innerHTML = p2Score;
})


reset.addEventListener("click", function() {
    gameOver = false;
    p1Display.innerHTML = " ";
    p2Display.innerHTML = " ";
    p1Score = 0;
    p2Score = 0;
    pWinner.innerHTML = " ";
})