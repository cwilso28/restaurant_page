import "./styles.css";
import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";

function loadHome () {
    homeContent();
}

function loadMenu () {
    menuContent();
}

function loadAbout () {
    aboutContent();
}

function clearContent () {
    contentContainer.textContent = "";
}

let homeButtonContainer = document.getElementById("home-button");
let menuButtonContainer = document.getElementById("menu-button");
let aboutButtonContainer = document.getElementById("about-button");
let contentContainer = document.getElementById("content");

homeButtonContainer.addEventListener("click", function(e) {
    clearContent();
    loadHome();
})

menuButtonContainer.addEventListener("click", function(e) {
    clearContent();
    loadMenu();
})

aboutButtonContainer.addEventListener("click", function(e) {
    clearContent();
    loadAbout();
})


// aboutContent();
// loadMenu();
loadHome();

