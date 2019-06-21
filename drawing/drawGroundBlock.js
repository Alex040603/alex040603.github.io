function drawGroundBlocks(x,y,numBLock){
    const GROUND_WIDTH = 16 * UNIT;
    for(i=0; i<numBLock; i++){
        ctx.save();
        ctx.translate(x * UNIT, y * UNIT);
        ctx.translate(i * GROUND_WIDTH, 0);
        drawGroundBlock();
        ctx.restore();

    }
}
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
    ctx.fillRect(7 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);    
    //the blue pixels
    ctx.fillStyle = "#859A9F"
    ctx.fillRect(2 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    //extra colord pixels on the dirt (tan color i think)
    ctx.fillStyle = "#CD9B6F"
    ctx.fillRect(2 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(0 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(0 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(5 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 5 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 11 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);    
    ctx.fillRect(12 * UNIT, 6 * UNIT, 1 * UNIT, 2 * UNIT); 
    ctx.fillRect(13 * UNIT, 5 * UNIT, 1 * UNIT, 2 * UNIT); 
    ctx.fillRect(14 * UNIT, 4 * UNIT, 1 * UNIT, 2 * UNIT); 
    ctx.fillRect(15 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(13 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);

    //lighter brown pixels
    ctx.fillStyle = "#9D7556"
    ctx.fillRect(5 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(13 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(10 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 6 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 5 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);  
    ctx.fillRect(8 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);  
    ctx.fillRect(14 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 14 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 13 * UNIT,1  * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 15 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 14 * UNIT,1  * UNIT, 1 * UNIT);
}
