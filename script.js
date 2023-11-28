/*
    Noel Nimstad
    2023/11/26 : 2023/11/27
*/

let correct = 0;
let total = 0;
let canContinute = false;
const scoreLabel = document.getElementById("score");

const range = document.getElementById("range");
const levelLabel = document.getElementById("level");

KanjiCanvas.init("canvas");

let levels = 10;
range.addEventListener("input", () => 
{
    levels = range.value;
    levelLabel.innerHTML = `${ levels }つのワニカニのレベル`;
});

const configMenu = document.getElementById("config");
const mainMenu = document.getElementById("main");
const startButton = document.getElementById("start");

let filteredVocabulary = [];
let currentItem = {};
let currentCharacter = "";
startButton.addEventListener("click", () => 
{
    configMenu.style.display = "none";
    mainMenu.style.display = "block";
    filteredVocabulary = vocabulary.filter(item => item.level <= levels);

    Prompt();
});

let prompt = "";
const promptLabel = document.getElementById("prompt");
async function Prompt()
{
    correctBool = false;
    promptLabel.style.color = "black";

    KanjiCanvas.erase("canvas");
    currentItem = filteredVocabulary[Math.floor(Math.random() * filteredVocabulary.length)];

    prompt = currentItem.character;
    currentCharacter = currentItem.character.match(/[\u4e00-\u9faf]/g);
    currentCharacter = currentCharacter[Math.floor(Math.random() * currentCharacter.length)]

    prompt = prompt.replace(currentCharacter, "○");
    promptLabel.innerHTML = "<span class=\"font\">" + prompt + "《" + currentItem.reading + "》</span><br/>" + currentItem.meaning;

    let svg;
    await fetch(`https://kanjivg.tagaini.net/kanjivg/kanji/${ currentCharacter.charCodeAt(0).toString(16).padStart(5, "0") }.svg`)
        .then(res => res.text())
        .then(body => svg = body);
    svg = svg.replace(/<g id="kvg:StrokeNumbers(.|\n)*<\/g>/g, "");
    svg = svg.replace("]>", "");

    correctDiagram.innerHTML = svg;
    correctDiagram.style.display = "none";
}

const undoButton = document.getElementById("undo");
undoButton.addEventListener("click", () => 
{
    KanjiCanvas.deleteLast("canvas");
});

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => 
{
    KanjiCanvas.erase("canvas");
});

const correctDiagram = document.getElementById("correctDiagram");
const correctButton = document.getElementById("correct");
correctButton.addEventListener("click", () => 
{
    if(canContinute) return;

    const results = KanjiCanvas.recognize("canvas");
    correctDiagram.style.display = "block";

    prompt = prompt.replace("○", currentCharacter);
    promptLabel.innerHTML = "<span class=\"font\">" + prompt + "《" + currentItem.reading + "》</span><br/>" + currentItem.meaning;

    total++;

    if(results.includes(currentCharacter))
    {
        correct++;
        promptLabel.style.color = "green";
        Yipee();
    } else 
    {
        promptLabel.style.color = "red";
    }

    scoreLabel.innerHTML = `${ correct }/${ total } : ${ Math.round(correct / total * 100) }%`;

    canContinute = true;
    nextButton.style.color = "black";
    correctButton.style.color = "lightgray";
});

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => 
{
    if(!canContinute) return;
    nextButton.style.color = "lightgray";
    correctButton.style.color = "black";
    canContinute = false;
    correctDiagram.innerHTML = "";

    Prompt();
});