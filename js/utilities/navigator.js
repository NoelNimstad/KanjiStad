const login = document.getElementById("login");
const main = document.getElementById("main");

if(!localStorage.getItem("key"))
{
    login.style.display = "flex";
    main.style.display = "none";
} else 
{
    login.style.display = "none";
    main.style.display = "block";
}