var canvas;
var ctx;
const UNIT = 30;
window.onload = init;

function init (){
    canvas = document.getElementById("animation-canvas");
    ctx = canvas.getContext("2d");
    
    //drawPacman();
    //drawPacman2();
    drawPacman3();
    drawRuler(1);
}

