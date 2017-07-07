
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

// Eyebrows
ctx.beginPath();

// Left eyebrow
ctx.moveTo(325, 300);
ctx.quadraticCurveTo(350, 290, 375, 300);
// Right eyebrow
ctx.moveTo(525, 300);
ctx.quadraticCurveTo(550, 290, 575, 300);

ctx.lineWidth = 20;
ctx.lineCap = 'round';
ctx.strokeStyle = '#3e3e3e';
ctx.stroke();

// Eyes
ctx.beginPath();
ctx.arc(350, 375, 25, 0, 2 * Math.PI, false);
ctx.arc(550, 375, 25, 0, 2 * Math.PI, false);
ctx.fillStyle = '#3e3e3e';
ctx.fill();

// // Ears
ctx.beginPath();

// Left ear
ctx.moveTo(200, 400);
ctx.quadraticCurveTo(100, 500, 240, 525);
// Right ear
ctx.moveTo(700, 400);
ctx.quadraticCurveTo(800, 500, 660, 525);

ctx.lineWidth = 10;
ctx.strokeStyle = '#3e3e3e';
ctx.stroke();

// Nose
ctx.beginPath();
ctx.moveTo(425, 400);

ctx.quadraticCurveTo(300, 500, 450, 500);

ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = '#3e3e3e';
ctx.stroke();

// Mouth
ctx.beginPath();
ctx.moveTo(300, 500);
ctx.quadraticCurveTo(450, 600, 600, 500);

ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = '#3e3e3e';
ctx.stroke();

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

document.getElementById('btn-gen').addEventListener('click', function() {
    ctx.clearRect(0, 0, 900, 900);   

    // Head
    var headCenterTop = rand(200, 250);
    var headCenterBottom = rand(550, 700);
    var tlHeadCoordX = rand(150, 250);
    var tlHeadCoordY = rand(200, 250);
    var blHeadCoordX = rand(125, 225);
    var blHeadCoordY = rand(450, 700);
    var trHeadCoordX = (450 - tlHeadCoordX) + 450;
    var trHeadCoordY = tlHeadCoordY;
    var brHeadCoordX = (450 - blHeadCoordX) + 450;
    var brHeadCoordY = blHeadCoordY;

    ctx.beginPath();
    ctx.moveTo(450, headCenterTop);

    // Left half
    ctx.quadraticCurveTo(tlHeadCoordX, tlHeadCoordY, 200, 400);
    ctx.quadraticCurveTo(blHeadCoordX, blHeadCoordY, 450, headCenterBottom);
    // Right half
    ctx.quadraticCurveTo(brHeadCoordX, brHeadCoordY, 700, 400);
    ctx.quadraticCurveTo(trHeadCoordX, trHeadCoordY, 450, headCenterTop);
    
    // console.log("Top Left Quat X " + tlHeadCoordX);
    // console.log("Top Left Quat Y " + tlHeadCoordY);
    // console.log("Top Right Quat X " + trHeadCoordX);
    // console.log("Top Right Quat Y " + trHeadCoordY);

    ctx.lineWidth = 10;
    ctx.strokeStyle = '#3e3e3e';
    ctx.stroke();

    // Eyes
    var eyeRadius = rand(10, 30);

    ctx.beginPath();
    ctx.arc(350, 375, eyeRadius, 0, 2 * Math.PI, false);
    ctx.arc(550, 375, eyeRadius, 0, 2 * Math.PI, false);
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
    ctx.moveTo(425, 400);

    ctx.quadraticCurveTo(rand(300, 400), rand(425, 450), noseEndCoordX, noseEndCoordY);
    ctx.quadraticCurveTo(nostrilCoordX, nostrilCoordY, nostrilEndCoordX, nostrilEndCoordY);

    // console.log("Nose End Coord X " + noseEndCoordX);
    // console.log("Nose End Coord Y " + noseEndCoordY);
    // console.log("Nostril Coord Y " + nostrilCoordY);
    // console.log("Nostril End Coord X " + nostrilEndCoordX);

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#3e3e3e';
    ctx.stroke();

    // Mouth
    var lMouthCornerX = rand(300, 400);
    var rMouthCornerX = (450 - lMouthCornerX) + 450;
    var mouthCornerY = rand(450, 600);
    var mouthCurveX = rand(350, 550);
    var mouthCurveY = rand(500, 600);

    ctx.beginPath();
    function boundsCheck() {
            // if (mouthCurveY <= nostrilCoordY) {
            //     console.log(mouthCurveY + " " + nostrilCoordY);
            //     let tempNum = (nostrilCoordY - mouthCurveY);
            //     nostrilCoordY = (nostrilCoordY - tempNum) - 25;
            //     console.log('Mouth Corner Y ' + mouthCurveY + " " + 'Nostril Y ' + nostrilCoordY);
            //     ctx.quadraticCurveTo(nostrilCoordX, nostrilCoordY, nostrilEndCoordX, nostrilEndCoordY);
            //     console.log('Mouth Corner Y Final ' + mouthCurveY)
            // }

            if (mouthCornerY > blHeadCoordY) {
                console.log(mouthCornerY);
                let tempNum = (mouthCornerY - blHeadCoordY);
                mouthCornerY = (mouthCornerY - tempNum);
                console.log('Mouth Corner Y ' + mouthCornerY)
                ctx.moveTo(lMouthCornerX, mouthCornerY);
            } else {
                ctx.moveTo(lMouthCornerX, mouthCornerY);
            };

            if (mouthCurveY > headCenterBottom) {
                console.log(mouthCurveY);
                let tempNum = (mouthCurveY - headCenterBottom);
                console.log(tempNum);
                mouthCurveY = (mouthCurveY - tempNum) - 25;
                console.log(mouthCurveY);
                ctx.quadraticCurveTo(mouthCurveX, mouthCurveY, rMouthCornerX, mouthCornerY);
            } else {
                ctx.quadraticCurveTo(mouthCurveX, mouthCurveY, rMouthCornerX, mouthCornerY);
            };
    };
    boundsCheck();

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#3e3e3e';
    ctx.stroke();
});