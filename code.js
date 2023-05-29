function generateAngle()
{
    return Math.floor((Math.random() * 320) + 20);
}

function toRadians(angle)
{
    return ((angle * Math.PI) / 180);
}

function drawCenter(canvas, cntx)
{
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    cntx.lineWidth = 1.5;
    cntx.beginPath();
    r = 6;
    cntx.arc(centerX, centerY, r, 0, 2 * Math.PI);
    cntx.stroke();
    console.log("cenetr");
}

function drawArms(canvas, cntx, angle)
{
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    cntx.lineWidth = 3;
    cntx.beginPath();
    cntx.moveTo(centerX - r, centerY);
    cntx.lineTo(centerX - canvas.height * 0.35, centerY);
    cntx.stroke();
    cntx.moveTo(centerX - (r * Math.cos(toRadians(angle))), centerY - (r * Math.sin(toRadians(angle))));
    cntx.lineTo(centerX - (canvas.height * 0.35 * Math.cos(toRadians(angle))), centerY - (canvas.height * 0.35 * Math.sin(toRadians(angle))));
    cntx.stroke();
    console.log(r * Math.cos(toRadians(angle)));
    console.log(toRadians(angle))
}

function drawAngle(angle)
{

}

function drawAll()
{
    var canvas = document.getElementById("drawing");    
    canvas.width = 0.35 * document.documentElement.clientHeight;
    canvas.height = 0.35 * document.documentElement.clientHeight;
    var cntx = canvas.getContext("2d");
    
    var randomAngle = generateAngle();
    drawCenter(canvas, cntx);
    drawArms(canvas, cntx, randomAngle);
}

console.log(generateAngle())
drawAll();