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
    ctx.save;
    ctx.strokeStyle = "blue";
    ctx.arc(100, 100, 70, 0, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.restore;
}

function yellowring() {
    ctx.save();
    ctx.strokeStyle = "yellow";
    


}