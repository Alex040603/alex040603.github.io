function drawGhost(x,y,color) {
    const RED_COLOR="#FF0000";
    const LAVANDER_COLOR="#FFB8FF"
    const AQUA_COLOR="#00FFFF"
    const ORANGE_COLOR="#FFB852"
    if (color=="red") {

    }
    ctx.save();
    ctx.translate(x * UNIT,y * UNIT);
    ctx.fillStyle = "#FFB852";//(orange)
    //the top to the pixel before the blue pupil 
    ctx.fillRect(5 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 1 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 2 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 3 * UNIT, 12 * UNIT, 3 * UNIT);
    ctx.fillStyle = "#FFB852";//the bottom part after the pupil until the tentacles (orange)
    ctx.fillRect(0 * UNIT, 6 * UNIT, 14 * UNIT, 6 * UNIT);
    ctx.fillStyle = "#FDFEFF"; //the white eyes
    ctx.fillRect(4 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 3 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 4 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 4 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    tentacles();
    pupils();
    ctx.restore();
}
function tentacles(){
    ctx.fillStyle = "#FFB852";//(oragne)
    ctx.fillRect(0 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(0 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
}
// function tentacles_frame_two(){
//     ctx.fillStyle = "#FFB852";//(oragne)
//     ctx.fillRect(13 * UNIT, )
// }
function pupils(){
    ctx.fillStyle = "#3B60AD";//blue
    ctx.fillRect(5 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
}
//