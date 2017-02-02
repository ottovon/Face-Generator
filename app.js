
var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');

// Head
ctx.beginPath();
ctx.moveTo(450, 200);

ctx.lineTo(450, 200);

ctx.quadraticCurveTo(300, 400, 200, 300);

ctx.lineWidth = 3;
ctx.strokeStyle = '#000000';
ctx.stroke();

// Nose
ctx.beginPath();
ctx.moveTo(450, 400);

ctx.lineTo(450, 400);

ctx.quadraticCurveTo(300, 500, 450, 500);

ctx.lineWidth = 3;
ctx.strokeStyle = '#000000';
ctx.stroke();

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById('btn-gen').addEventListener('click', function() {
    ctx.clearRect(0, 0, 900, 900);   

    ctx.beginPath();
    // ctx.moveTo(rand(400, 500), rand(400, 500));
    // ctx.lineTo(rand(400, 500), rand(400, 500));
    ctx.moveTo(450, 400);

    ctx.lineTo(450, 400);

    var qTo1 = rand(300, 450);
    var qTo2 = rand(400, 500);

    ctx.quadraticCurveTo(qTo1, qTo2, rand(450, 500), rand(400, 550));
    console.log(qTo1);
    console.log(qTo2);
    ctx.quadraticCurveTo(rand(450, 500), rand(400, 500), rand(500, 510), rand(500, 400));

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
});