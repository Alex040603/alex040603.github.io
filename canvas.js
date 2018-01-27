var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');  
    ctx.fillStyle="#2C2B2C"; 
    // Outline
    // Left Part
    ctx.fillRect(0,80,10,70);
    ctx.fillRect(10,60,10,30);
    ctx.fillRect(20,50,10,20);
    ctx.fillRect(30,40,10,20);
    ctx.fillRect(40,40,10,10);
    ctx.fillRect(40,30,90,10);
    // Right Part
    ctx.fillRect(120,40,10,10);
    ctx.fillRect(130,40,10,20); 
    ctx.fillRect(140,50,10,20);  
    ctx.fillRect(150,60,10,30);
    ctx.fillRect(160,80,10,70);
    // Bottom Left Corner
    ctx.fillRect(10,140,10,20);
    ctx.fillRect(20,150,10,30);
    ctx.fillRect(30,170,10,10);
    ctx.fillRect(30,180,110,10);
    // Bottom Right Corner
    ctx.fillRect(150,140,10,20);
    ctx.fillRect(140,150,10,30);
    ctx.fillRect(130,170,20,10);
    ctx.fillStyle="blue"
    // Second To-Last Outline
    ctx.fillRect



    ctx.fillStyle="red"
    

   














}