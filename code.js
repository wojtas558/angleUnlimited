function generateAngle()
{
    return Math.floor((Math.random() * 320) + 20);
}

function toRadians(angle)
{
    return ((angle * Math.PI) / 180);
}

function drawCenter(cntx, color="black", width=3, centerR)
{
    cntx.strokeStyle = color;
    cntx.lineWidth = width;


    cntx.beginPath();
    cntx.arc(centerX, centerY, centerR, 0, 2 * Math.PI);
    cntx.stroke();
}

function drawArms(canvas, cntx, angle, color="black", width=3, centerR)
{
    cntx.strokeStyle = color;
    cntx.lineWidth = width;
    
    cntx.beginPath();
    cntx.moveTo(centerX - centerR, centerY);
    cntx.lineTo(centerX - canvas.height * 0.4, centerY);
    cntx.stroke();
    
    cntx.beginPath();
    cntx.moveTo(centerX - (centerR * Math.cos(toRadians(angle))), centerY - (centerR * Math.sin(toRadians(angle))));
    cntx.lineTo(centerX - (canvas.height * 0.4 * Math.cos(toRadians(angle))), centerY - (canvas.height * 0.4 * Math.sin(toRadians(angle))));
    cntx.stroke();
}

function drawAngle(canvas, cntx, angle, color="black", width=2)
{
    cntx.strokeStyle = color;
    cntx.lineWidth = width;
    let angleR = 35

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

    drawAngle(canvas, cntx, randomAngle, "#e99700", 3.5)
    drawArms(canvas, cntx, randomAngle, "black", 3.5, 3);
    drawCenter(cntx, "#e99700", 3, 3);
}

function load()
{
    drawAll();
    setColorInput("bg", '--background', changeBackground);
    setColorInput("elements", '--itemBackground', changeItems);
}

function setColorInput(colorPickerID, colorVariable, changeFunction)
{
    colorPicker = document.getElementById(colorPickerID)
    colorPicker.value = getComputedStyle(document.documentElement).getPropertyValue(colorVariable); 
    colorPicker.addEventListener("input", changeFunction, false);
}

function changeItems(event) 
{
    document.documentElement.style.setProperty('--itemBackground', event.target.value);    
}
function changeBackground(event)
{
    document.documentElement.style.setProperty('--background', event.target.value);
}
function checkGuess()
{
    guess = parseInt(document.getElementById("guess").value);
    if(Number.isInteger(guess))
    {
        
        results = document.getElementById("results");
        
        var resultsRow = results.insertRow(guesses)
        guesses += 1;
        var guessAngle = resultsRow.insertCell(0);
        var direction = resultsRow.insertCell(1);     
        var distance = resultsRow.insertCell(2);     
        
        guessAngle.innerHTML = guess + "&deg;";

        if(guess < randomAngle){
            direction.innerHTML = "<img class='images'src=images/up.png>";
        }
        else if(guess > randomAngle){
            direction.innerHTML = "<img class='images'src=images/down.png>";
        }
        else{
            direction.innerHTML = "<img class='images'src=images/hit.png>";
        }

        if(Math.abs(guess - randomAngle) == 0){
            distance.innerHTML = "HIT";
        }  
        else if(Math.abs(guess - randomAngle) <= 5){
            distance.innerHTML = "VERY CLOSE";
        }              
        else if(Math.abs(guess - randomAngle) <= 15){
            distance.innerHTML = "Close";
        }
        
        
        if(guesses == 5 || guess == randomAngle)
        {
            document.getElementById("guess").disabled = true;
            document.getElementById("guessBtn").disabled = true;
            if(guess != randomAngle)
            {
                alert("YOU LOST\nAnswer was " + randomAngle)
                document.getElementById("wins").innerHTML = 0;
                document.getElementById("tries").innerHTML = (0).toFixed(1);
                
            }
            else
            {
                var record = parseInt(document.getElementById("wins").innerHTML);
                record += 1;
                document.getElementById("wins").innerHTML = record;
                tries += guesses;
                document.getElementById("tries").innerHTML =  (tries / record).toFixed(1);
            }

            document.getElementById("playAgain").hidden = false;
        }
        document.getElementById("guess").value = "";
    }    
}

function playAgain()
{
    drawAll();
    document.getElementById("results").innerHTML = "";
    document.getElementById("guess").disabled = false;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("playAgain").hidden = true;
    guesses = 0;

}

var guesses = 0;
var tries = 0;