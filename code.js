function generateAngle()
{
    return Math.floor((Math.random() * 320) + 20);
}

function drawCenter()
{
    var canvas = document.getElementById("drawing");
    canvas.width = 0.35 * document.documentElement.clientHeight;
    canvas.height = 0.35 * document.documentElement.clientHeight;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var cntx = canvas.getContext("2d");
    cntx.beginPath();
    cntx.arc(centerX, centerY, 3, 0, 2 * Math.PI);
    cntx.stroke();
}

function drawArms(angle)
{
    var canvas = document.getElementById("drawing");
    canvas.width = 0.35 * document.documentElement.clientHeight;
    canvas.height = 0.35 * document.documentElement.clientHeight;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
}

function drawAngle(angle)
{

}

function drawAll()
{
    
    var randomAngle = generateAngle();
    drawCenter();
    drawArms(randomAngle);
    drawCenter(randomAngle);
}

console.log(generateAngle())
drawAll();