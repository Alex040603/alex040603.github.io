var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');  
    ctx.fillStyle= "aqua";
    ctx.fillRect(150,100,350,250);    
    ctx.strokeStyle="red";
    ctx.strokeRect(150,100,350,250);
}