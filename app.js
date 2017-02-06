
var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');

// Head
ctx.beginPath();
ctx.moveTo(450, 200);

// Left half
ctx.quadraticCurveTo(200, 200, 200, 400);
ctx.quadraticCurveTo(200, 600, 450, 600);
// Right half
ctx.quadraticCurveTo(700, 600, 700, 400);
ctx.quadraticCurveTo(700, 200, 450, 200);

ctx.lineWidth = 10;
ctx.strokeStyle = '#3e3e3e';
ctx.stroke();

// Eyes
ctx.beginPath();
ctx.arc(350, 375, 25, 0, 2 * Math.PI, false);
ctx.arc(550, 375, 25, 0, 2 * Math.PI, false);
ctx.fillStyle = '#3e3e3e';
ctx.fill();

// Nose
ctx.beginPath();
ctx.moveTo(425, 400);

ctx.quadraticCurveTo(300, 500, 450, 500);

ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = '#3e3e3e';
ctx.stroke();

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById('btn-gen').addEventListener('click', function() {
    ctx.clearRect(0, 0, 900, 900);   

    // Head
    var tlHeadCoordX = rand(150, 250);
    var tlHeadCoordY = rand(200, 250);
    // var btlHeadCoord3 = rand(300, 450);
    // var btlHeadCoord4 = rand(400, 500);
    var trHeadCoordX = (450 - tlHeadCoordX) + 450;
    var trHeadCoordY = tlHeadCoordY;
    // var btrHeadCoord3 = rand(300, 450);
    // var btrHeadCoord4 = rand(400, 500);

    ctx.beginPath();
    ctx.moveTo(450, 200);

    // Left half
    ctx.quadraticCurveTo(tlHeadCoordX, tlHeadCoordY, 200, 400);
    ctx.quadraticCurveTo(200, 600, 450, 600);
    // Right half
    ctx.quadraticCurveTo(700, 600, 700, 400);
    ctx.quadraticCurveTo(trHeadCoordX, trHeadCoordY, 450, 200);
    
    // console.log("Top Left Quat X " + tlHeadCoordX);
    // console.log("Top Left Quat Y " + tlHeadCoordY);
    // console.log("Top Right Quat X " + trHeadCoordX);
    // console.log("Top Right Quat Y " + trHeadCoordY);

    ctx.lineWidth = 10;
    ctx.strokeStyle = '#3e3e3e';
    ctx.stroke();

    // Eyesctx.beginPath();
    ctx.beginPath();
    ctx.arc(350, 375, 25, 0, 2 * Math.PI, false);
    ctx.arc(550, 375, 25, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#3e3e3e';
    ctx.fill();

    // Nose
    var noseEndCoordX = rand(400, 450);
    var noseEndCoordY = rand(425, 500);
    var nostrilCoordY = rand(450, 550);
    var nostrilCoordX = rand(450, 500);
    var nostrilEndCoordX = noseEndCoordX + rand(20, 70);
    var nostrilEndCoordY = noseEndCoordY;

    ctx.beginPath();
    // ctx.moveTo(rand(400, 500), rand(400, 500));
    // ctx.lineTo(rand(400, 500), rand(400, 500));
    ctx.moveTo(425, 400);

    ctx.quadraticCurveTo(rand(300, 400), rand(425, 450), noseEndCoordX, noseEndCoordY);
    // ctx.quadraticCurveTo(rand(450, 500), rand(400, 500), rand(500, 510), rand(500, 400));
    ctx.quadraticCurveTo(nostrilCoordX, nostrilCoordY, nostrilEndCoordX, nostrilEndCoordY);

    console.log("Nose End Coord X " + noseEndCoordX);
    console.log("Nose End Coord Y " + noseEndCoordY);
    console.log("Nostril Coord Y " + nostrilCoordY);
    console.log("Nostril End Coord X " + nostrilEndCoordX);

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#3e3e3e';
    ctx.stroke();
});