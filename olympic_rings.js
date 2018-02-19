var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    yellowringtop(); 
    blueringtop();
    blueringbottom(); 
    yellowringbottom();
    blackringbottom();
   
}

function yellowringtop() {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(160, 190, 70, 5 * Math.PI/4, Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
}
function blueringtop() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(90, 90, 70, 5 * Math.PI/4, Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function blueringbottom() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(90, 90, 70, Math.PI/4, 5 * Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function yellowringbottom() {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(160, 190, 70, Math.PI/4, 5 * Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
} 

function blackringbottom() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(250, 105, 70, Math.PI/4, 5 * Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
}



