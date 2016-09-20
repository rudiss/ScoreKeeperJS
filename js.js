var p1Buttuon = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');

var reset = document.getElementById('reset');

var p1Score = 0;
var p2Score = 0;
p1Buttuon.addEventListener("click", function() {
    p1Score++;
    p1Display.innerHTML = p1Score;

});

p2Button.addEventListener("click", function() {
    p2Score++
    p2Display.innerHTML = p2Score;
})


reset.addEventListener("click", function(){
    clear(p1Score,p2Score);
})