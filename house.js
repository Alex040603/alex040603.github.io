var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    toprectangle();
    toptriangle();
    topinsidetriangle();
    drawBox(5,10);
    drawBox(0,0);
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
    ctx.moveTo(441, 88);
    ctx.lineTo(551, 181);
    ctx.lineTo(334, 181);
    ctx.fill();
}

function topinsidetriangle() {
    //triangle inside top grey triangle
    ctx.beginPath();
    ctx.fillStyle = "#CBCBCB";
    ctx.lineWidth = 5;
    ctx.moveTo(441, 93);
    ctx.lineTo(551, 173);
    ctx.lineTo(334, 173);
    ctx.fill();
}
function drawBox (x,y) {
    ctx.fillRect(x,y,10,10);

}