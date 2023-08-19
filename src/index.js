import loaditup from "./pageload";
import showHome from "./homepage.js";
import showMenu from "./menu.js";
import aboutUs from "./about-us";

loaditup();

const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", showMenu);

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click", showHome);

const aboutButton = document.querySelector(".about");
aboutButton.addEventListener("click", aboutUs);

document.querySelector("body").style.fontFamily = "Arial";
