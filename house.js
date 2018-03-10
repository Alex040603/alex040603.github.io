var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    toprectangle();
    topTriangle();
    topinsidetriangle();
    greyBarOne();
    whiteBarOne();
    bigHousePart();
    drawNavyBar(415,136);
    drawNavyBar(415,143);
    drawNavyBar(415,150);
    drawNavyBar(415,157);
    drawGreyBox(293,225);
    drawGreyBox(480,225);
    door();
}
function toprectangle() {
    //top navy-blue rectangle
    ctx.fillStyle = "#38394A";
    ctx.fillRect(282, 130, 317, 51);
}
function topTriangle() {
    //top gray triangle
    ctx.beginPath();
    ctx.fillStyle = "#545B63";
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
    ctx.lineTo(545, 181);
    ctx.lineTo(340, 181);
    ctx.fill();
}
function greyBarOne() {
    ctx.fillStyle = "#545B63";
    ctx.fillRect(270, 181, 340, 4);
}
function whiteBarOne() {
    ctx.fillStyle = "#A9A9A9";
    ctx.fillRect(275, 185, 330, 8);
}
function bigHousePart() {
    ctx.fillStyle = "#DADADA";
    ctx.fillRect(282, 193, 315, 218);
}
function drawNavyBar(x,y) {
    ctx.fillStyle = "#38394A";
    ctx.fillRect(x,y,55,4);
}
function drawGreyBox(x,y) {
    ctx.fillStyle = "#A3A7A8";
    ctx.fillRect(x,y,105,75);
}
function door() {
    ctx.fillStyle = "#94857C";
    ctx.fillRect(408,220,64,120)
}



