/*
    Noel Nimstad
    2023/11/30 : 2023/11/30
*/

const root = document.querySelector(":root");
let darkMode = JSON.parse(localStorage.getItem("dark")); // string -> bool

const light = 
{
    background: "#fff",
    wk: "#00a1fa",
    mainText: "#000",
    secondaryText: "#808080"
};

const dark = 
{
    background: "#000",
    wk: "#00a1fa",
    mainText: "#fff",
    secondaryText: "#808080"
};

function ApplyTheme()
{
    const targetStyle = darkMode ? dark : light;

    for(const [key, value] of Object.entries(targetStyle))
    {
        root.style.setProperty(`--${ key }`, value);
    }
}

ApplyTheme();

const darkModeButton = document.getElementById("darkMode");
darkModeButton.addEventListener("click", () => 
{
    darkMode = !darkMode;
    localStorage.setItem("dark", darkMode);

    ApplyTheme();
});