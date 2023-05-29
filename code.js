function generateAngle()
{
    return Math.floor((Math.random() * 320) + 20);
}

function toRadians(angle)
{
    return ((angle * Math.PI) / 180);
}

function drawCenter(cntx, color="black", width=3)
{
    cntx.strokeStyle = color;
    cntx.lineWidth = width;
    r = 3;


    cntx.beginPath();
    cntx.arc(centerX, centerY, r, 0, 2 * Math.PI);
    cntx.stroke();
}

function drawArms(canvas, cntx, angle, color="black", width=3)
{
    cntx.strokeStyle = color;
    cntx.lineWidth = width;
    
    cntx.beginPath();
    cntx.moveTo(centerX - r, centerY);
    cntx.lineTo(centerX - canvas.height * 0.35, centerY);
    cntx.stroke();
    
    cntx.beginPath();
    cntx.moveTo(centerX - (r * Math.cos(toRadians(angle))), centerY - (r * Math.sin(toRadians(angle))));
    cntx.lineTo(centerX - (canvas.height * 0.35 * Math.cos(toRadians(angle))), centerY - (canvas.height * 0.35 * Math.sin(toRadians(angle))));
    cntx.stroke();
}

function drawAngle(canvas, cntx, angle, color="black", width=2)
{
    cntx.strokeStyle = color;
    cntx.lineWidth = width;
    let angleR = 20

    cntx.beginPath();
    cntx.arc(centerX, centerY, angleR, Math.PI, toRadians(angle) + Math.PI);
    cntx.stroke();
    
}

function drawAll()
{
    var canvas = document.getElementById("drawing");    
    var cntx = canvas.getContext("2d");

    canvas.width = 0.35 * document.documentElement.clientHeight;
    canvas.height = 0.35 * document.documentElement.clientHeight;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    /*var*/ randomAngle = generateAngle();

    drawCenter(cntx, "gray", 2);
    drawAngle(canvas, cntx, randomAngle, "darkgray", 2.5)
    drawArms(canvas, cntx, randomAngle, "black", 3);
    console.log(randomAngle);
}