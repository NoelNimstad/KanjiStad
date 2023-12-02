/*
    Noel Nimstad
    2023/11/26 : 2023/11/30
*/

let correct = 0; // ammount of kanji correctly drawn
let total = 0; // ammount of kanji prompted

let canContinute = false; // variable to prevent player from accidentaly skipping

const configMenu = document.getElementById("config"); // "start" menu
const titleLabel = document.getElementById("title"); // "startup" text
const levelLabel = document.getElementById("level"); // ammount of levels selected
const range = document.getElementById("range"); // levels selector
const startButton = document.getElementById("start"); // start button

const mainMenu = document.getElementById("main"); // "main" menu
const promptLabel = document.getElementById("prompt"); // the kanji prompt
const scoreLabel = document.getElementById("score"); // the current score
const nextButton = document.getElementById("next"); // next button
const undoButton = document.getElementById("undo"); // undo button
const correctButton = document.getElementById("correct"); // check answer button
const restartButton = document.getElementById("restart"); // earase button
const correctDiagram = document.getElementById("correctDiagram"); // correct kanji picture

KanjiCanvas.init("canvas"); // initialize kanji canvas

let levels = 10; // default the ammount of levels to 10
range.addEventListener("input", () => // if levels slider is changed
{
    levels = range.value; // update the levels value
    levelLabel.innerHTML = `${ levels }つのワニカニのレベル`; // and then update the prompt
});

let filteredVocabulary = []; // initialize an empty array for the vocab array filtered by level
let currentItem = {}; // initialize an empty object for the current item (kanji, reading & meanings)
let currentCharacter = ""; // current kanji, in a string

startButton.addEventListener("click", () => // if the start button is clicked
{
    configMenu.style.display = "none"; // hide the "start" menu
    titleLabel.style.display = "none"
    mainMenu.style.display = "block"; // show the "main" menu

    /* 
        filter vocabulary based on item level, if the item level is
        less than or equal to the target maximum level, then include
        it in the filtered vocabulary array
    */
    filteredVocabulary = vocabulary.filter(item => item.level <= levels);

    Prompt(); // call the prompt function to prompt the user with a Kanji
});

let prompt = ""; // current prompt string
async function Prompt() // prompt function to prompt the user with a kanji, async for recourse fetching
{
    promptLabel.style.color = "var(--mainText)"; // reset the prompt label's color to the main text color
    KanjiCanvas.erase("canvas"); // clear the Kanji Canvas

    // select an item at random from the filtered vocab array
    currentItem = filteredVocabulary[Math.floor(Math.random() * filteredVocabulary.length)];

    prompt = currentItem.character; // set the prompt string to the entire vocab, e.g お休み, which includes kana
    currentCharacter = currentItem.character.match(/[\u4e00-\u9faf]/g); // select the kanji character from that

    // some strings contain multiple kanji, like 大学, in this case we need to make sure we only select one of them
    currentCharacter = currentCharacter[Math.floor(Math.random() * currentCharacter.length)]

    prompt = prompt.replace(currentCharacter, "○"); // change prompt string to hide the current character

    // generate some HTML for the prompt label's text
    promptLabel.innerHTML = "<span class=\"font\">" + prompt + "《" + currentItem.reading + "》</span><br/>" + currentItem.meaning;

    let svg; // define an svg variable for the target kanji's diagram
    await fetch(`https://kanjivg.tagaini.net/kanjivg/kanji/${ currentCharacter.charCodeAt(0).toString(16).padStart(5, "0") }.svg`)
        .then(res => res.text())
        .then(body => svg = body); // fetch the current character's diagram from KanjiVG by it's unicode value
    svg = svg.replace(/<g id="kvg:StrokeNumbers(.|\n)*<\/g>/g, ""); // hide chart numbers to avoid clutter
    svg = svg.replace("]>", ""); // i don't know why this is here, but remove it either way (@￣ρ￣@)

    correctDiagram.innerHTML = svg; // set the correct diagrams HTML code to the svg's code
    correctDiagram.style.display = "none"; // hide the diagram until user presses the "correct answer" button
}

correctButton.addEventListener("click", () => // if the correct button is pressed
{
    if(canContinute) return; // if the user has already pressed the correct button, don't do anything

    prompt = prompt.replace("○", currentCharacter); // update the prompt to include hiddent character

    // and then generate HTML code for the prompt label
    promptLabel.innerHTML = "<span class=\"font\">" + prompt + "《" + currentItem.reading + "》</span><br/>" + currentItem.meaning;
    
    correctDiagram.style.display = "block"; // show the correct kanji's diagram
    
    total++; // increment total ammount of kanji drawn

    const results = KanjiCanvas.recognize("canvas"); // attempt to recognize drawn kanji
    if(results.includes(currentCharacter)) // if the correct kanji is included in recognition array
    {
        correct++; // then increment the ammount of correct points
        promptLabel.style.color = "green"; // make the prompt label green
        Yipee(); // and throw some confetti ☆*:.｡. o(≧▽≦)o .｡.:*☆
    } else // otherwise, if the answer is not recognized
    {
        promptLabel.style.color = "red"; // make the prompt label red
    }

    // update score label
    scoreLabel.innerHTML = `${ correct }/${ total } : ${ Math.round(correct / total * 100) }%`;

    canContinute = true; // user can now continue to the next prompt
    nextButton.style.color = "var(--mainText)"; // change the next button's color to the main text color
    correctButton.style.color = "var(--secondaryText)"; // and the correct button's color to the secondary text color (inactive buttin)
});


undoButton.addEventListener("click", () => // if the undo button is pressed
{
    KanjiCanvas.deleteLast("canvas"); // then undo the latest stroke
});

restartButton.addEventListener("click", () => // if the restart button is pressed
{
    KanjiCanvas.erase("canvas"); // then restart the kanji drawing
});

nextButton.addEventListener("click", () => // if the next button is pressed
{
    if(!canContinute) return; // if the user can't continue yet, then do nothing
    nextButton.style.color = "var(--secondaryText)"; // set the next button's color to the secondary text color (inactive button)
    correctButton.style.color = "var(--mainText)"; // and the correct button's color to the main text color
    
    canContinute = false; // the user can no longer continue (no kanji drawn yet)
    correctDiagram.innerHTML = ""; // clear the current correct kanji's diagram

    Prompt(); // prompt the user with a new kanji
});