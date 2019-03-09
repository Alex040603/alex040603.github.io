var canvas;
var ctx;
const UNIT = 30;
var requestId;
var isRight = true
var positionX = 0;
var positionY = 350;
window.onload = init;
function init() {
    canvas = document.getElementById("animation-canvas");
    ctx = canvas.getContext("2d");
    ctx.fillRect(positionX, positionY, 50, 50);
    startAnimation();

}
function startAnimation() {
    requestId = requestAnimationFrame(animationLoop);
}
function animationLoop(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(positionX, positionY, 50, 50);
    moveBlock();
    requestId = requestAnimationFrame(animationLoop);
}

function moveBlock() {
    if (isRight = true) {
        positionX += 5;
    } else if (positionX >= 1000) {
        positionX -= 5;
    }
}
function changeDirection() {
    if (isRight = true) {
        positionX += 5;
    } else if (isRight = 8) {
        
    }
}