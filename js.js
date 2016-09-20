var p1Buttuon = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var input = document.querySelector("input");
var matchScore = document.getElementById('matchScore');

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
            p1Display.classList.add("p1Winner");
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
        p2Display.classList.add("p2Winner");
        gameOver = true;
        pWinner.innerHTML = "Player 2 has Won! Gratz!";
    }
    p2Display.innerHTML = p2Score;
})


reset.addEventListener("click", function() {
 clearMatch();

})

function clearMatch() {
    gameOver = false;
    p1Display.innerHTML = "0";
    p2Display.innerHTML = "0";
    p1Score = 0;
    p2Score = 0;
    pWinner.innerHTML = " ";
    p2Display.classList.remove("p2Winner");
    p1Display.classList.remove("p1Winner");

}

input.addEventListener("change", function() {
    matchScore.innerHTML = this.value;
    winnigScore = Number(this.value);
    clearMatch();
});