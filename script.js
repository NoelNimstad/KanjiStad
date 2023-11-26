const range = document.getElementById("range");
const levelLabel = document.getElementById("level");

KanjiCanvas.init("canvas");

let levels = 10;
range.addEventListener("input", () => 
{
    levels = range.value;
    levelLabel.innerHTML = `・${ levels }ヶレベル`;
});

async function Main()
{
    
}

Main();