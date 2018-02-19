var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    blueyellowringleft(); 
    blueyellowringtworight();
    yelllowpartfour();
    blackringleftyellowthree();
    greenring();
}

function blueyellowringleft() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(80, 90, 70, Math.PI/4, 5 * Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke(); 
    //yellowring left part
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(160, 190, 70, Math.PI/4, 5 * Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function blueyellowringtworight() {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(160, 190, 70, 5 * Math.PI/4,3*Math.PI/2);
    ctx.lineWidth = 7;
    ctx.stroke(); 
    //bluering right
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(80, 90, 70, 5 * Math.PI/4, Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function yelllowpartfour() {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(160, 190, 70, 7*Math.PI/4, Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke(); 
}

function blackringleftyellowthree() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(240, 90, 70, Math.PI/4, 5 * Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
    //yellowpart3
     ctx.beginPath();
     ctx.strokeStyle = "yellow";
     ctx.arc(160, 190, 70, 3*Math.PI/2, 7*Math.PI/4);
     ctx.lineWidth = 7;
     ctx.stroke(); 
}

function greenring () {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(320, 190, 70, Math.PI/4, 5 * Math.PI/4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

