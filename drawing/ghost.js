function drawGhostOrange() {
    ctx.fillStyle = "rgb(244,156,63)";//orange
    //the top to the pixel before the blue pupil 
    ctx.fillRect(6 * UNIT, 1 * UNIT, 4 * UNIT, 1 * UNIT)
    ctx.fillRect(4 * UNIT, 2 * UNIT, 8 * UNIT, 1 * UNIT)
    ctx.fillRect(3 * UNIT, 3 * UNIT, 10 * UNIT, 1 * UNIT)
    ctx.fillRect(2 * UNIT, 4 * UNIT, 12 * UNIT, 3 * UNIT)
    ctx.fillStyle = "rgb(255,255,55)";//yellow
    ctx.fillRect(5 * UNIT, 4 * UNIT, 2 * UNIT, 2 * UNIT)
    ctx.fillRect(11 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(4 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT)
    ctx.fillRect(10 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT)
    ctx.fillRect(10 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT)
    ctx.fillRect(4 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT)
    ctx.fillRect(100 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillStyle = "rgb(244,156,63)";//the bottom part after the pupil (orange)
    ctx.fillRect(1 * UNIT, 7 * UNIT, 14 * UNIT, 5 * UNIT)
    
}