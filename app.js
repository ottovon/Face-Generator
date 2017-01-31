
var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(450, 400);

ctx.lineTo(450, 400);

ctx.quadraticCurveTo(300, 500, 450, 500);

ctx.lineWidth = 3;
ctx.strokeStyle = '#000000';
ctx.stroke();