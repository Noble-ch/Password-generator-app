// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// prettier-ignore
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswdEl = document.getElementById("pswd-el");
let randomindex;
let container = document.querySelector(".container");
let h1 = document.querySelector("h1");
let moto = document.querySelector(".moto");
let themeIcon = document.querySelector(".material-symbols-outlined");
let body = document.querySelector("body");
let greenh1 = document.querySelector(".green-h1");
let info = document.querySelector(".info"); //info about copy pswd
let clicks = 0; //amount of clicked on button
//generates random combinations of characters
function pswdGenerator() {
  let randompswd = "";
  for (let i = 0; i < 10; i++) {
    randomindex = Math.floor(Math.random() * characters.length);
    randompswd += characters[randomindex];
  }
  pswdEl.textContent = randompswd;
  info.textContent = "Click to copy"; //info label to copy a password
}
//copies password to clipboard
function copyPswd() {
  info.textContent = "Copied!!";
  navigator.clipboard.writeText(pswdEl.textContent);
  pswdEl.textContent = "";
}

function lightTheme() {
  container.style.background = "#0c3042";
  h1.style.color = "whitesmoke";
  moto.style.color = "whitesmoke";
  themeIcon.textContent = "mode_night";
  themeIcon.style.color = "whitesmoke";
  themeIcon.style.transform = "rotatez(0deg)";
  body.style.backgroundColor = "#1a1a1a";
}
function darkTheme() {
  container.style.background = "#dbebd8";
  h1.style.color = "#0c3042";
  moto.style.color = "#0c3042";
  themeIcon.style.transition = "1s";
  themeIcon.textContent = "sunny";
  themeIcon.style.color = "#0c3042";
  themeIcon.style.transform = "rotatez(180deg)";
  body.style.backgroundColor = "#999";
  greenh1.style.color = "#00c264";
}
//if clicks count are even dark-Theme else light-Theme
themeIcon.addEventListener("click", themeMode);
function themeMode() {
  clicks += 1;
  if (clicks % 2 == 0) {
    lightTheme();
  } else {
    darkTheme();
  }
}
