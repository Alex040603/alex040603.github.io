function drawGroundBlock(){
    ctx.fillStyle = "#77AD4C";
    //the top grass part
    ctx.fillRect(0 * UNIT, 0 * UNIT, 16 * UNIT, 1 * UNIT); 
    ctx.fillRect(0 * UNIT, 1 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 1 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 2 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(1 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 2 * UNIT, 2 * UNIT, 2  * UNIT);
    ctx.fillRect(6 * UNIT, 2  * UNIT, 3 * UNIT, 1  * UNIT);
    ctx.fillRect(7 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 2 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    //the actuall dirt
    ctx.fillStyle = "#684E37"
    ctx.fillRect(0 * UNIT, 6 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(1 * UNIT, 4 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(2 * UNIT, 2 * UNIT, 1 * UNIT, 14 * UNIT);
    ctx.fillRect(3 * UNIT, 4 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(4 * UNIT, 4 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(5 * UNIT, 2 * UNIT, 1 * UNIT, 14 * UNIT);
    ctx.fillRect(6 * UNIT, 3 * UNIT, 1 * UNIT, 13 * UNIT);
    ctx.fillRect(7 * UNIT, 4 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(8 * UNIT, 3 * UNIT, 1 * UNIT, 13 * UNIT);
    ctx.fillRect(9 * UNIT, 2 * UNIT, 1 * UNIT, 14 * UNIT);
    ctx.fillRect(10 * UNIT, 1 * UNIT, 1 * UNIT, 15 * UNIT);
    ctx.fillRect(11 * UNIT, 3 * UNIT, 4 * UNIT, 13 * UNIT);
    ctx.fillRect(15 * UNIT, 4 * UNIT, 1 * UNIT, 12 * UNIT);
    //extra colord pixels on the dirt
    ctx.fillStyle = "#CD9B6F"
    ctx.fillRect(2 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    //Also, on the dirt block, the blacked out spots are the ones completed above. Start wherever.

}
