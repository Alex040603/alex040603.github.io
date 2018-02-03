var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
}

function bluering() {
    ctx.fillstyle = "blue"
    ctx.arc(150, 100, 50, 0, 2 * math.PI)
}
