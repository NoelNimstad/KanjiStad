/*
    Noel Nimstad
    2023/11/30 : 2023/11/30
*/

const root = document.querySelector(":root"); // grab the root element
let darkMode = JSON.parse(localStorage.getItem("dark")); // convert the string -> bool

const light = // light mode colors
{
    background: "#fff",
    wk: "#00a1fa",
    mainText: "#000",
    secondaryText: "#808080"
};

const dark = // dark mode colors
{
    background: "#000",
    wk: "#00a1fa",
    mainText: "#fff",
    secondaryText: "#808080"
};

function ApplyTheme() // function to apply the current theme
{
    const targetStyle = darkMode ? dark : light; // figure out the current style

    for(const [key, value] of Object.entries(targetStyle)) // loop through the target theme
    {
        root.style.setProperty(`--${ key }`, value); // propogate the CSS variables
    }
}

ApplyTheme(); // apply the theme upon launch

const darkModeButton = document.getElementById("darkMode"); // dark mode toggle button
darkModeButton.addEventListener("click", () => // when the dark mode toggle is pressed
{
    darkMode = !darkMode; // toggle the dark mode variable
    localStorage.setItem("dark", darkMode); // and update the local storage

    ApplyTheme(); // apply new theme
});