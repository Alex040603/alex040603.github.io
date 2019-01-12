var canvas;
var ctx;
const UNIT = 5;
window.onload = init;

function init (){
    canvas = document.getElementById ("animation-canvas");
    ctx = canvas.getcontext ("2d");
}

function drawcharacter() {
    ctx.fillRect (0,0,0,0);
    ctx.fillStyle("yellow");
}