/*
    Noel Nimstad
    2023/11/27 : 2023/11/27
*/

const colors = 
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

const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -100;

document.body.append(canvas);
const context = canvas.getContext("2d");

const deg2rad = Math.PI / 180;
const d360 = 2 * Math.PI;

const drag = 1;

class Confetti
{
    constructor()
    {
        this.x = canvas.width / 2;
        this.y = canvas.height;
        this.velocity = Math.random() * 20 + 10;

        const direction = (Math.random() * 90 - 135) * deg2rad;
        this.vx = Math.cos(direction) * this.velocity;
        this.vy = Math.sin(direction);
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    Update()
    {
        this.x += this.vx;
        this.y += this.vy * this.velocity;
        this.velocity -= drag;

        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, d360);
        context.fill();

        if(this.y > canvas.height + 5)
            confettiArray.splice(confettiArray.indexOf(this), 1);
    }
}

let confettiArray = [];
const ammount = 100;
function Yipee()
{
    for(let i = 0; i < ammount; i++)
    {
        confettiArray.push(new Confetti());
    }

    window.requestAnimationFrame(Draw);
}

function Draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < confettiArray.length; i++)
    {
        confettiArray[i].Update();
    }

    if(confettiArray.length > 0)
        window.requestAnimationFrame(Draw);
}

window.addEventListener("resize", () => 
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});