var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    blueyellowringleft();
    blueyellowringright();
    yelllowpartfour();
    blackringleftyellowthree();
    redringleft();
    greenringleft();
    blackringright();
    redringright();
}

function blueyellowringleft() {
    ctx.beginPath();
    ctx.strokeStyle = "	#5426EB"; //blue
    ctx.arc(80, 90, 70, Math.PI / 4, 5 * Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
    //yellowring left part
    ctx.beginPath();
    ctx.strokeStyle = "#EDF24E"; //yel
    ctx.arc(160, 190, 70, Math.PI / 4, 5 * Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function blueyellowringright() {
    ctx.beginPath();
    ctx.strokeStyle = "#EDF24E"; //yel
    ctx.arc(160, 190, 70, 5 * Math.PI / 4, 3 * Math.PI / 2);
    ctx.lineWidth = 7;
    ctx.stroke();
    //bluering right
    ctx.beginPath();
    ctx.strokeStyle = "	#5426EB"; //blue
    ctx.arc(80, 90, 70, 5 * Math.PI / 4, Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function yelllowpartfour() {
    ctx.beginPath();
    ctx.strokeStyle = "#EDF24E"; //yel
    ctx.arc(160, 190, 70, 7 * Math.PI / 4, Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function blackringleftyellowthree() {
    ctx.beginPath();
    ctx.strokeStyle = "#06040F"; //black
    ctx.arc(240, 90, 70, Math.PI / 4, 5 * Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
    //yellowpart3
    ctx.beginPath();
    ctx.strokeStyle = "#EDF24E"; //yel
    ctx.arc(160, 190, 70, 3 * Math.PI / 2, 7 * Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
}
//GREEN RING PARTS
function greenringleft() {
    ctx.beginPath();
    ctx.strokeStyle = "#76F557"; //green
    ctx.arc(320, 190, 70, Math.PI / 4, 5 * Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
    // green ring. Cut 2
    ctx.beginPath();
    ctx.strokeStyle = "#76F557";
    ctx.arc(320, 190, 70, 5 * Math.PI / 4, 3 * Math.PI / 2);
    ctx.lineWidth = 7;
    ctx.stroke();
    // green ring. Cut 3
    ctx.beginPath();
    ctx.strokeStyle = "#76F557";
    ctx.arc(320, 190, 70, 3 * Math.PI / 2, 7 * Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
    // green ring. Cut 4
    ctx.beginPath();
    ctx.strokeStyle = "#76F557";
    ctx.arc(320, 190, 70, 7 * Math.PI / 4, Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
}
function blackringright() {
    ctx.beginPath();
    ctx.strokeStyle = "#06040F"; //black
    ctx.arc(240, 90, 70, 5 * Math.PI / 4, Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function redringleft() {
    ctx.beginPath();
    ctx.strokeStyle = "	#CB0009"; //red
    ctx.arc(400, 90, 70, 3 * Math.PI / 4, 7 * Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function redringright() {
    ctx.beginPath();
    ctx.strokeStyle = "	#CB0009"; //red
    ctx.arc(400, 90, 70, 7 * Math.PI / 4, 3 * Math.PI / 4);
    ctx.lineWidth = 7;
    ctx.stroke();
}