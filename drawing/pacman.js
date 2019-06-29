function drawPacmanDie(x, y, frame) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    if (frame == 1) {
        ctx.translate(1*UNIT,1*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(4 * UNIT, 0 * UNIT, 5 * UNIT, 1 * UNIT);
        ctx.fillRect(2 * UNIT, 1 * UNIT, 9 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 2 * UNIT, 11 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 3 * UNIT, 11 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 4 * UNIT, 13 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 5 * UNIT, 13 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 6 * UNIT, 13 * UNIT, 1 * UNIT);
        //bottom half
        ctx.fillRect(0 * UNIT, 7 * UNIT, 13 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 8 * UNIT, 13 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 9 * UNIT, 11 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 10 * UNIT, 11 * UNIT, 1 * UNIT);
        ctx.fillRect(2 * UNIT, 11 * UNIT, 9 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 12 * UNIT, 5 * UNIT, 1 * UNIT);
    } else if (frame == 2) {
        //looks like clam
        ctx.translate(1*UNIT,1*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(0 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT);
        ctx.fillRect(11 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(10 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 4 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(9 * UNIT, 4 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 5 * UNIT, 5 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 5 * UNIT, 5 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 6 * UNIT, 6 * UNIT, 1 * UNIT);
        ctx.fillRect(7 * UNIT, 6 * UNIT, 6 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 7 * UNIT, 11 * UNIT, 2 * UNIT);
        ctx.fillRect(2 * UNIT, 9 * UNIT, 9 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 10 * UNIT, 5 * UNIT, 1 * UNIT);
    } else if (frame == 3) {
        //ulgier clam
        ctx.translate(0*UNIT,1*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(1 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(13 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 4 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(11 * UNIT, 4 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 5 * UNIT, 5 * UNIT, 1 * UNIT);
        ctx.fillRect(10 * UNIT, 5 * UNIT, 5 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 6 * UNIT, 7 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 6 * UNIT, 7 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 7 * UNIT, 13 * UNIT, 2 * UNIT);
        ctx.fillRect(2 * UNIT, 9 * UNIT, 11 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 10 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 10 * UNIT, 3 * UNIT, 1 * UNIT);
    } else if (frame == 4) {
        ctx.translate(0*UNIT,2*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(0 * UNIT, 5 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(12 * UNIT, 5 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 6 * UNIT, 6 * UNIT, 1 * UNIT);
        ctx.fillRect(9 * UNIT, 6 * UNIT, 6 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 7 * UNIT, 15 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 8 * UNIT, 13 * UNIT, 1 * UNIT);
        ctx.fillRect(2 * UNIT, 9 * UNIT, 11 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 10 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 10 * UNIT, 3 * UNIT, 1 * UNIT);
    } else if (frame == 5) {
        ctx.translate(0*UNIT,2*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(0 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(11 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 7 * UNIT, 15 * UNIT, 2 * UNIT);
        ctx.fillRect(1 * UNIT, 9 * UNIT, 13 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 10 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 10 * UNIT, 4 * UNIT, 1 * UNIT);
    } else if (frame == 6) {
        ctx.translate(0*UNIT,0*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(4 * UNIT, 8 * UNIT, 7 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 9 * UNIT, 15 * UNIT, 2 * UNIT);
        ctx.fillRect(1 * UNIT, 11 * UNIT, 13 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 12 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 12 * UNIT, 4 * UNIT, 1 * UNIT);
    } else if (frame == 7) {
        ctx.translate(0*UNIT,0*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(6 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 9 * UNIT, 7 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 10 * UNIT, 13 * UNIT, 1 * UNIT);
        ctx.fillRect(0 * UNIT, 11 * UNIT, 15 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 12 * UNIT, 6 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 12 * UNIT, 6 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(9 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
    } else if (frame == 8) {
        ctx.translate(0*UNIT,0*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 9 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 10 * UNIT, 7 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 11 * UNIT, 9 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 9 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 12 * UNIT, 13 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 13 * UNIT, 6 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 13 * UNIT, 6 * UNIT, 1 * UNIT);
        ctx.fillRect(2 * UNIT, 14 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(9 * UNIT, 14 * UNIT, 4 * UNIT, 1 * UNIT);
    }else if (frame==9) {
        ctx.translate(0*UNIT,0*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 9 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(5 * UNIT, 10 * UNIT, 5 * UNIT, 2 * UNIT);
        ctx.fillRect(4 * UNIT, 12 * UNIT, 7 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 13 * UNIT, 9 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
    }else if (frame==10) {
        ctx.translate(0*UNIT,0*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
        ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 9 * UNIT, 3 * UNIT, 3 * UNIT);
        ctx.fillRect(5 * UNIT, 12 * UNIT, 5 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    }else if (frame==11) {
        ctx.translate(0*UNIT,0*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 6 * UNIT);
    }else if (frame==12) {
        ctx.translate(0*UNIT,0*UNIT);
        ctx.fillStyle = "rgb(251,255,0)";
        ctx.fillRect(5 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(9 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(5 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(11 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(10 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(2 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
        ctx.fillRect(2 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
        ctx.fillRect(11 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(5 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(9 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(10 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(11 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    }
    ctx.restore();
}
function drawPacman1(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);

    ctx.fillStyle = "rgb(251,255,0)";
    //the top half (until the inner most part of the mouth)
    ctx.fillRect(4 * UNIT, 0 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 1 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 2 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 3 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 4 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 5 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
    //bottom half
    ctx.fillRect(0 * UNIT, 7 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 8 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 9 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 10 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 11 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 12 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.restore();
}
// Pacman Chewing (2)
function drawPacman2(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);

    ctx.fillStyle = "rgb(251,255,0)";
    ctx.fillRect(4 * UNIT, 0 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 1 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 2 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 3 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 4 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 5 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
    //bottom half
    ctx.fillRect(0 * UNIT, 7 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 8 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 9 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 10 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 11 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 12 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.restore();
}
// Pacman Ball (3)
function drawPacman3(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);

    ctx.fillStyle = "rgb(251,255,0)";
    ctx.fillRect(4 * UNIT, 0 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 1 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 2 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 3 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 4 * UNIT, 13 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 5 * UNIT, 13 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 6 * UNIT, 13 * UNIT, 1 * UNIT);
    //bottom half
    ctx.fillRect(0 * UNIT, 7 * UNIT, 13 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 8 * UNIT, 13 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 9 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 10 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 11 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 12 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.restore();
}
