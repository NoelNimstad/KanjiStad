/*
    Noel Nimstad
    2023/11/27 : 2023/11/30
*/

const colors = // possible confetti colors
[
    "#ff3b3b",
    "#ff963b",
    "#ffe83b",
    "#9aff3b",
    "#3bff52",
    "#3bffe8",
    "#3baaff",
    "#3b41ff",
    "#be3bff",
    "#ff3bdb"
]

const canvas = document.createElement("canvas"); // create a canvas for the confetti
canvas.width = window.innerWidth; // make it fill the entire screen's width
canvas.height = window.innerHeight; // make it fill the entire screen' heieght
canvas.style.position = "absolute"; // position it absolutley (where ever i want)
canvas.style.top = 0; // place it at the top of the screen
canvas.style.left = 0; // place it at the very left of the screen to make sure it fills the whole screen
canvas.style.zIndex = -100; // send it back in z-layers to make it non-interactible

document.body.append(canvas); // append the canvas to the document
const context = canvas.getContext("2d"); // get the canvas context (drawing ability)

const deg2rad = Math.PI / 180; // degress to radians constant
const d360 = 2 * Math.PI; // 360 degrees in radians

const drag = 1; // confetti drag

class Confetti // confetti class for consice code
{
    constructor() // on initialization
    {
        this.x = canvas.width / 2; // make the confetti start at the middle of the screen
        this.y = canvas.height; // and outside of screen view
        this.velocity = Math.random() * 20 + 20; // apply a random velocity to each confetti

        const direction = (Math.random() * 90 - 135) * deg2rad; // calculate a direction angle between -45 and 45 degrees
        this.vx = Math.cos(direction) * this.velocity; // calculate a x velocity
        this.vy = Math.sin(direction); // calculate a y velocity
        
        this.color = colors[Math.floor(Math.random() * colors.length)]; // select a random color from the color array
    }

    Update() // on a new frame
    {
        this.x += this.vx; // translate horizontally by x velocity
        this.y += this.vy * this.velocity; // translate vertically by y velocity
        this.velocity -= drag; // decrease velocity by the drag constant

        context.fillStyle = this.color; // set the canvas fill color to the confetti's color
        context.beginPath(); // start drawing
        context.arc(this.x, this.y, 5, 0, d360); // make a circle at target position
        context.fill(); // fill the circle

        if(this.y > canvas.height + 5) // if the confetti is off screen
            confettiArray.splice(confettiArray.indexOf(this), 1); // delete self
    }
}

let confettiArray = []; // array for confetti
const ammount = 100; // ammount of confetti to make each time
function Yipee() // the confetti making function
{
    for(let i = 0; i < ammount; i++) // make 100 unique confetties
    {
        confettiArray.push(new Confetti()); // push them to the confetti array
    }

    window.requestAnimationFrame(Draw); // request a draw frame for the confetti's
}

function Draw() // draw function
{
    context.clearRect(0, 0, canvas.width, canvas.height); // clear screen (to not leave confetti trails)

    for(let i = 0; i < confettiArray.length; i++) // loop through each confetti
    {
        confettiArray[i].Update(); // call their update function
    }

    if(confettiArray.length > 0) // if there are any confetti left
        window.requestAnimationFrame(Draw); // then request another draw frame
}

window.addEventListener("resize", () => // if the window is resized
{
    canvas.width = window.innerWidth; // then resize the canvas width as well
    canvas.height = window.innerHeight; // and the canvas height
});