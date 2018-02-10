var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    bluering();
    yellowring();
}

function bluering() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(100, 100, 70, 0, 1 * Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();
}


function yellowring() {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(200, 100, 70, 0, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();
}

