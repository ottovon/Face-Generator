
var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');

// Head
ctx.beginPath();
ctx.moveTo(450, 200);

// Left half
ctx.quadraticCurveTo(200, 200, 200, 400);
ctx.quadraticCurveTo(200, 600, 450, 600);
// Right half
ctx.quadraticCurveTo(650, 600, 650, 400);
ctx.quadraticCurveTo(650, 200, 450, 200);

ctx.lineWidth = 3;
ctx.strokeStyle = '#000000';
ctx.stroke();

// Nose
ctx.beginPath();
ctx.moveTo(450, 400);

ctx.quadraticCurveTo(300, 500, 450, 500);

ctx.lineWidth = 3;
ctx.strokeStyle = '#000000';
ctx.stroke();

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById('btn-gen').addEventListener('click', function() {
    ctx.clearRect(0, 0, 900, 900);   

    var lqTo1 = rand(150, 250);
    var lqTo2 = rand(200, 250);
    // var lqTo3 = rand(300, 450);
    // var lqTo4 = rand(400, 500);
    var rqTo1 = lqTo1;
    var rqTo2 = lqTo2;
    // var rqTo3 = rand(300, 450);
    // var rqTo4 = rand(400, 500);

    // Head
    ctx.beginPath();
    ctx.moveTo(450, 200);

    // Left half
    ctx.quadraticCurveTo(lqTo1, lqTo2, 200, 400);
    ctx.quadraticCurveTo(200, 600, 450, 600);
    // Right half
    ctx.quadraticCurveTo(650, 600, 650, 400);
    ctx.quadraticCurveTo(rqTo1, rqTo2, 450, 200);
    
    console.log("Top Left Quat X " + lqTo1);
    console.log("Top Left Quat Y " + lqTo2);
    console.log("Top Right Quat X " + rqTo1);
    console.log("Top Right Quat Y " + rqTo2);

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Nose
    ctx.beginPath();
    // ctx.moveTo(rand(400, 500), rand(400, 500));
    // ctx.lineTo(rand(400, 500), rand(400, 500));
    ctx.moveTo(450, 400);

    ctx.lineTo(450, 400);

    ctx.quadraticCurveTo(rand(300, 450), rand(400, 500), rand(450, 500), rand(400, 550));
    ctx.quadraticCurveTo(rand(450, 500), rand(400, 500), rand(500, 510), rand(500, 400));

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
});