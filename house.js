var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    toprectangle();
    toptriangle();
}
function toprectangle() {
    //top navy-blue rectangle
    ctx.fillStyle = "#38394A";
    ctx.fillRect(282, 130, 317, 51);
}
function toptriangle() {
    //top gray triangle
    ctx.beginPath();
    ctx.fillStyle = "#545B63";
    ctx.lineWidth = 5;
    ctx.moveTo(441, 78);
    ctx.lineTo(551, 188);
    ctx.lineTo(334, 188);
    ctx.fill();
}

