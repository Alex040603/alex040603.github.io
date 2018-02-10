var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    bluering();
    blueringtop();
    yellowring();
    blackring();
    redwing();
}

function bluering() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(100, 100, 70, 0, Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();
}


function yellowring() {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(190, 170, 70, 0, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function blueringtop() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(100, 100, 70, Math.PI, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function blackring() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(280, 100, 70, 0, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function redring() {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.arc(200, 100, 70, 0, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();
}