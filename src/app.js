//HOME
import style from './main.css'
import {lol} from "./menu.js";

let content = document.querySelector("#content");
let h1 = document.createElement("h1");
let h1div = document.createElement("div");

h1.textContent = "The Baker’s Feast";

h1div.appendChild(h1);
content.appendChild(h1div);

let pdiv = document.createElement("div");
let p = document.createElement("p");

p.textContent = "Welcome to the Family Son!";

pdiv.appendChild(p);

content.appendChild(pdiv);


let Home = document.querySelector("#Home");
Home.addEventListener("click",()=>{
    content.replaceChildren(h1div,pdiv);
});

let menu = document.querySelector("#Menu");
menu.addEventListener("click",()=>{
    
    content.replaceChildren(lol);
});