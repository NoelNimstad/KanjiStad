// CANVAS SETUP
const TOLERANCE = 15;
const SCALE = 3;

const container = document.getElementById("container");
const svgElement = document.getElementById("svg");
const svgParent = document.getElementById("main-svg");
const canvas = document.createElement("canvas");
const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");
svgParent.style.scale = SCALE;

canvas.width = 109 * SCALE;
canvas.height = 109 * SCALE;
container.append(canvas);

// CONTEXT SETUP
const context = canvas.getContext("2d");
context.lineWidth = 3 * SCALE;
context.lineCap = "round";
context.strokeStyle = "#000";

// GLOBAL VARIABLES
let xOffset = canvas.offsetLeft;
let yOffset = canvas.offsetTop;
let strokeComplete = false;
let drawing = false;
let x, y; // MOUSE X, Y
let data; // Ref pattern data
let strokes = []; // KanjiVG SVG data
let strokeIndex = 0;
let pointIndex = 0;

let lives = 5;
let totalLives = 5;
let red = 66;
let green = 220;

function findPointsBasedOnFirstLetterOfTheEpicControlPointsOfAwsomenessByNoelAndAlexNimstadByDoingGoodEpicMath(points)
{
    let pointsToReturn = [];
    let copy = points;
    let startPoint = [];

    for(let i = 0; i < copy.length; i++)
    {
        switch(copy[i][0])
        {
            case "m":
                {
                    let values = copy[i].substring(1).split(",");
                    startPoint[0] = parseFloat(values[0]);
                    startPoint[1] = parseFloat(values[1]);
                    pointsToReturn.push([ startPoint[0], startPoint[1] ]);
                }
                break;    
            case "M":
                {
                    let values = copy[i].substring(1).split(",");
                    startPoint[0] = parseFloat(values[0]);
                    startPoint[1] = parseFloat(values[1]);
                    pointsToReturn.push([ startPoint[0], startPoint[1] ]);
                }
                break;
            case "c":
                {
                    let values = copy[i].substring(1).split(",");
                    while(values.length > 2)
                    {
                        values.shift();
                    }

                    let dx = parseFloat(values[0]);
                    let dy = parseFloat(values[1]);
                    startPoint[0] += dx;
                    startPoint[1] += dy;
                    pointsToReturn.push([ startPoint[0], startPoint[1] ]);
                }
                break;
            case "C":
                {
                    let values = copy[i].substring(1).split(",");
                    while(values.length > 2)
                    {
                        values.shift();
                    }
                    startPoint[0] = parseFloat(values[0]);
                    startPoint[1] = parseFloat(values[1]);
                    pointsToReturn.push([ startPoint[0], startPoint[1] ]);
                }
                break;
            default:
                console.log("you messed up");
                break;
        }
    }

    console.log(pointsToReturn);
    return pointsToReturn;
}

function grabPathDataFromSVGVeryCool(svgData, character)
{
    const strokeData = svgData.match(/(<path(.*))/g);
    let strokes = [];

    for(let stroke of strokeData)
    {
        let s = [];
        const start = stroke.replace(/(.*)[Mm](.*?),(.*?)c(.*)/g, "$2:$3").split(":");
        s.push([ parseFloat(start[0]), parseFloat(start[1]) ]);

        const information = stroke.replace(/(.*)d="(.*)"(.*)/, "$2").replace(/(?<!,)-/g, ",-");
        let points = information.replace(/([mMcC])/g, ":$1").split(":");
        points.shift();

        strokes.push(findPointsBasedOnFirstLetterOfTheEpicControlPointsOfAwsomenessByNoelAndAlexNimstadByDoingGoodEpicMath(points));
    }
    
    lives = Math.floor(strokes.length / 2);
    totalLives = lives;

    const data = 
    [
        character,
        strokes.length,
        strokes
    ]

    return data;
}

async function initialize() 
{
    const character = "略";
    const response = await fetch(`https://kanjivg.tagaini.net/kanjivg/kanji/${character.charCodeAt(0).toString(16).padStart(5, "0")}.svg`);
    const svgData = await response.text();
    console.log(svgData);
    data = grabPathDataFromSVGVeryCool(svgData, character);
    strokes = svgData.match(/<path (.*)\/>/g);
}

initialize();

canvas.addEventListener("mousedown", e => 
{
    pointIndex = 0;
    drawing = true;
    x = (e.clientX - xOffset);
    y = (e.clientY - yOffset);
});

function handleYouHaveNoLivesLeftWhichMeantThatYouDieWhichIsEvenLessEpicThanLoosingDueToBadDrawingSkillsAndStuffBecauseThisTimeYouWontGetAnySecondChances()
{
    // do stuff
}

function handleNotVeryEpicDrawingSkillsWhichProbablyLedToAFaliureDueToBadDrawingSkillsAndDefinetleyNotTheProgramItselfIPromise()
{
    if(!(--lives))
    {
        handleYouHaveNoLivesLeftWhichMeantThatYouDieWhichIsEvenLessEpicThanLoosingDueToBadDrawingSkillsAndStuffBecauseThisTimeYouWontGetAnySecondChances();
    }
    
    progress.style.width = `${ (lives / totalLives) * 100 }%`;
    red += 30 * 5 / totalLives;
    green -= 30 * 5 / totalLives;
    progress.style.backgroundColor = `rgb(${ red }, ${ green }, 55)`;
    progressBar.style.backgroundColor = `rgb(${ red * 0.85 }, ${ green * 0.85 }, 40)`;
}

canvas.addEventListener("mouseup", e => 
{
    const [currentX, currentY] = [e.clientX - xOffset, e.clientY - yOffset];
    const [realX, realY] = [currentX / SCALE, currentY / SCALE];
    const [targetX, targetY] = data[2][strokeIndex][data[2][strokeIndex].length - 1];
    const d = Math.sqrt((realX - targetX) * (realX - targetX) + (realY - targetY) * (realY - targetY));
    drawing = false;
    if(strokeComplete && d < TOLERANCE * 1.5)
    {
        strokeComplete = false;
        svgElement.innerHTML += strokes[strokeIndex++];
    } else handleNotVeryEpicDrawingSkillsWhichProbablyLedToAFaliureDueToBadDrawingSkillsAndDefinetleyNotTheProgramItselfIPromise();
    context.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mousemove", e => 
{
    if(!drawing) 
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
    } else 
    {
        const [currentX, currentY] = [e.clientX - xOffset, e.clientY - yOffset];
        const [realX, realY] = [currentX / SCALE, currentY / SCALE];
    
        if(data && data[2][strokeIndex][pointIndex]) 
        {
            const [targetX, targetY] = data[2][strokeIndex][pointIndex];
            const d = Math.sqrt((realX - targetX) * (realX - targetX) + (realY - targetY) * (realY - targetY));
        
            if(d <= TOLERANCE) 
            {
                pointIndex++;
                if (pointIndex === data[2][strokeIndex].length) 
                {
                    strokeComplete = true;
                    return;
                }
            }
        }    
    
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(currentX, currentY);
        context.stroke();
    
        x = currentX;
        y = currentY;
    }
});