var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    blueringtop();
    // yellowring();
    blueringbottom();
}

function blueringtop() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(100, 100, 70, 5 * Math.PI/4, Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function blueringbottom() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(100, 100, 70, Math.PI/4, 5 * Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
}




