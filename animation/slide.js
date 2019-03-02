var canvas;
var ctx;
const UNIT = 30;
var requestId;
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
    if (positionY <= 700) {
        positionX += 5;
    } else if {
        (positionY == 750)
        positionY = 0
    }
}
