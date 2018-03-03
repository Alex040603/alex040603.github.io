var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "#2C2B2C";
    // Outline
    // Left Part
    ctx.fillRect(0, 80, 10, 70);
    ctx.fillRect(10, 60, 10, 30);
    ctx.fillRect(20, 50, 10, 20);
    ctx.fillRect(30, 40, 10, 20);
    ctx.fillRect(40, 40, 10, 10);
    ctx.fillRect(40, 30, 90, 10);
    // Right Part
    ctx.fillRect(120, 40, 10, 10);
    ctx.fillRect(130, 40, 10, 20);
    ctx.fillRect(140, 50, 10, 20);
    ctx.fillRect(150, 60, 10, 30);
    ctx.fillRect(160, 80, 10, 70);
    // Bottom Left Corner
    ctx.fillRect(10, 140, 10, 20);
    ctx.fillRect(20, 150, 10, 30);
    ctx.fillRect(30, 170, 10, 10);
    ctx.fillRect(30, 180, 110, 10);
    // Bottom Right Corner
    ctx.fillRect(150, 140, 10, 20);
    ctx.fillRect(140, 150, 10, 30);
    ctx.fillRect(130, 170, 20, 10);
    ctx.fillStyle = "red"
    // Second To-Last Outline
    // Top Part
    ctx.fillRect(10, 90, 10, 50);
    ctx.fillRect(20, 70, 10, 70);
    ctx.fillRect(30, 60, 10, 70);
    ctx.fillRect(40, 50, 10, 80);
    ctx.fillRect(50, 50, 10, 80);
    ctx.fillRect(40, 40, 90, 10);
    //Second part
    ctx.fillRect(80, 40, 10, 90);
    ctx.fillRect(70, 40, 10, 90);
    ctx.fillRect(60, 40, 10, 90);
    ctx.fillRect(90, 40, 10, 90);
    ctx.fillRect(100, 40, 10, 90);
    ctx.fillRect(110, 40, 10, 90);
    ctx.fillRect(120, 40, 10, 90);
    ctx.fillRect(130, 60, 10, 70);
    ctx.fillRect(130, 70, 10, 60);
    ctx.fillRect(140, 70, 10, 70);
    ctx.fillRect(150, 90, 10, 50);
    ctx.fillStyle = "#2C2B2C";
    ctx.fillRect(30, 130, 110, 10);
    ctx.fillRect(20, 140, 20, 10);
    ctx.fillRect(130, 140, 20, 10);
    //eyes
    ctx.fillStyle = "#2C2B2C";
    ctx.fillRect(60, 150, 20, 10);
    ctx.fillRect(90, 150, 20, 10);
    //white spots
    ctx.fillStyle = "white";
    ctx.fillRect(30, 60, 30, 20);
    ctx.fillRect(50, 40, 20, 15);
    ctx.fillRect(100, 50, 20, 15);
    ctx.fillRect(70, 90, 20, 15);
    ctx.fillRect(120, 110, 20, 15);
    ctx.fillRect(30, 100, 20, 15);
}