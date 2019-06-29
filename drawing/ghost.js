function drawGhost(x, y, color, frame, pupilFrame) {
    var ghostColor;
    const RED_COLOR = "#FF0000";
    const LAVANDER_COLOR = "#FFB8FF";
    const AQUA_COLOR = "#00FFFF";
    const ORANGE_COLOR = "#FFB852";
    var frame;
    if (color == "red") {
        ghostColor = RED_COLOR;
    } else if (color == "lavander") {
        ghostColor = LAVANDER_COLOR;
    } else if (color == "aqua") {
        ghostColor = AQUA_COLOR;
    } else if (color == "orange") {
        ghostColor = ORANGE_COLOR;
    }
    if (frames == 1) {
        frame = 1
    } else if (frames == 2) {
        frame = 2
    }



    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    ctx.fillStyle = ghostColor;
    //the top to the pixel before the blue pupil 
    ctx.fillRect(5 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 1 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 2 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 3 * UNIT, 12 * UNIT, 3 * UNIT);
    ctx.fillStyle = ghostColor;
    ctx.fillRect(0 * UNIT, 6 * UNIT, 14 * UNIT, 6 * UNIT);
    ctx.fillStyle = "#FDFEFF"; //the white eyes
    ctx.fillRect(3 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 3 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 4 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);

    if (pupilFrame == "up") {
        drawPupilsUp();
    } else if (pupilFrame == "right") {
        drawPupilsRight();
    } else if (pupilFrame == "down") {
        drawPupilsDown();
    } else if (pupilFrame == "left") {
        drawPupilsLeft();
    }

    if (frame == 1) { // Tentacle Frame 1
        ctx.fillStyle = ghostColor;
        ctx.fillRect(0 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT);
        ctx.fillRect(0 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
        ctx.fillRect(12 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
        ctx.fillRect(13 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    } else if (frame == 2) {
        ctx.fillStyle = ghostColor;
        ctx.fillRect(1 * UNIT, 12 * UNIT, 2 * UNIT, 2 * UNIT);
        ctx.fillRect(3 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(5 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 12 * UNIT, 2 * UNIT, 2 * UNIT);
        ctx.fillRect(8 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(10 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(11 * UNIT, 12 * UNIT, 2 * UNIT, 2 * UNIT);
    }
    ctx.restore();
}

function drawPupilsUp() {
    ctx.fillStyle = "#2373BD";
    ctx.fillRect(3 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
}
function drawPupilsRight() {
    ctx.fillStyle = "#2373BD";
    ctx.fillRect(2 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
}
function drawPupilsDown() {
    ctx.fillStyle = "#2373BD";
    ctx.fillRect(3 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
}
function drawPupilsLeft() {
    ctx.fillStyle = "#2373BD";
    ctx.fillRect(4 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
}