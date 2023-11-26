// SCORE
let correct = 0;
let total = 0;
let correctBool = false;
const scoreLabel = document.getElementById("score");

const range = document.getElementById("range");
const levelLabel = document.getElementById("level");

KanjiCanvas.init("canvas");

let levels = 10;
range.addEventListener("input", () => 
{
    levels = range.value;
    levelLabel.innerHTML = `・${ levels }ヶレベル`;
});

const startButton = document.getElementById("start");

let filteredVocabulary = [];
let currentItem = {};
let currentCharacter = "";
startButton.addEventListener("click", () => 
{
    filteredVocabulary = vocabulary.filter(item => item.level <= levels);
    Prompt();
});

let prompt = "";
const promptLabel = document.getElementById("prompt");
function Prompt()
{
    correctBool = false;

    KanjiCanvas.erase("canvas");
    currentItem = filteredVocabulary[Math.floor(Math.random() * filteredVocabulary.length)];

    prompt = currentItem.character;
    currentCharacter = currentItem.character.match(/[\u4e00-\u9faf]/g);
    currentCharacter = currentCharacter[Math.floor(Math.random() * currentCharacter.length)]

    prompt = prompt.replace(currentCharacter, "○");
    promptLabel.innerHTML = prompt + "《" + currentItem.kana + "》<br/>" + currentItem.meaning;
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

const correctButton = document.getElementById("correct");
correctButton.addEventListener("click", () => 
{
    const results = KanjiCanvas.recognize("canvas");

    prompt = prompt.replace("○", currentCharacter);
    promptLabel.innerHTML = prompt;

    total++;

    if(results.includes(results))
    {
        correct++;
        correctBool = true;
    }

    scoreLabel.innerHTML = `${ correct }/${ total } : ${ correct / total * 100 }%`;
});

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => 
{
    if(!correctBool)
    {
        total++;
        scoreLabel.innerHTML = `${ correct }/${ total } : ${ correct / total * 100 }%`;
    }

    correctBool = false;

    Prompt();
});