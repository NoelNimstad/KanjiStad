if(!localStorage.getItem("user") || !localStorage.getItem("vocab"))
{
    window.location.href = "login.html";
}

const data = JSON.parse(localStorage.getItem("user"));

const logout = document.getElementById("logout");

logout.addEventListener("click", () => 
{
    localStorage.clear();
    window.location.href = "login.html";
});

const welcome = document.getElementById("welcome");
welcome.innerText = "お帰りなさい" + data.username + "さん!";

const level = document.getElementById("level");
level.innerText = "ワニカニのレベルは" + data.level;

const levels = document.getElementById("levels");
levels.innerHTML = data.level + "レベル"

const range = document.getElementById("range");
range.value = data.level;
range.addEventListener("input", () => 
{
    console.log(range.value);
    levels.innerHTML = range.value + "レベル";
})

const go = document.getElementById("go");
go.addEventListener("click", () => 
{
    window.location.href = "draw.html?levels=" + range.value;
});

let searchParameters = window.location.search.split("?"); searchParameters.shift();

const [summary, closeButton, 
       summaryTimeLabel, summaryPercentageLabel, summaryItemsLabel,
       lastTimeTimeLabel, lastTimePercentageLabel, lastTimeCountLabel] = [document.getElementById("summary"), 
                                                                           document.getElementById("close"),
                                                                           document.getElementById("time"),
                                                                           document.getElementById("percentage"),
                                                                           document.getElementById("items"),
                                                                           document.getElementById("timeLast"),
                                                                           document.getElementById("accuracyLast"),
                                                                           document.getElementById("countLast")];
{
    let [count, correct, time] = [localStorage.getItem("kanji"),
                                  localStorage.getItem("correct"),
                                  localStorage.getItem("time")];

    if(count && correct && time)
    {
        lastTimePercentageLabel.innerHTML = summaryPercentageLabel.innerHTML = count > 0 ?  
                                                                               Math.floor(correct / count * 100) + "%" :
                                                                               "0%";

        summaryItemsLabel.innerHTML = correct + "/" + count;
        lastTimePercentageLabel.innerHTML += " (" + correct + "/" + (lastTimeCountLabel.innerHTML = count) + ")";

        const [h, m, s] = [Math.floor(time / 3600),
                           Math.floor((time % 3600) / 60),
                           time % 60];

        lastTimeTimeLabel.innerHTML = summaryTimeLabel.innerHTML = (h > 0 ? h + "h " : "") 
                                                                 + (m > 0 ? m + "m " : "") 
                                                                 + (s > 0 ? s + "s" : "");

        if(searchParameters.includes("summary"))
        {
            summary.style.display = "block";
        }
    }
}

closeButton.addEventListener("click", () => { summary.style.display = "none" });