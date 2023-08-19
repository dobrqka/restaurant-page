export default function pageLoad() {
  document.querySelector("body").style.margin = "0";
  document.querySelector("body").style.padding = "0";

  const contentDiv = document.querySelector("#content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }

  contentDiv.style.display = "grid";
  contentDiv.style.gridTemplateRows = "1fr 7fr";
  const headerDiv = document.createElement("div");
  const mainArea = document.createElement("div");
  mainArea.style.background = "url(../src/background.jpg)";
  mainArea.classList.add("main-area");
  mainArea.style.display = "flex";
  // mainArea.style.height = "100vh";

  headerDiv.classList.add("header");

  const breadLogo = document.createElement("img");
  breadLogo.setAttribute("src", "../src/bread.png");
  breadLogo.style.width = "4rem";
  breadLogo.style.justifySelf = "center";
  headerDiv.appendChild(breadLogo);

  const heading = document.createElement("h1");
  heading.textContent = "Арна Пекарна";
  heading.style.fontSize = "3rem";
  heading.style.justifySelf = "center";
  heading.style.display = "grid";
  heading.style.alignItems = "center";
  heading.style.color = "white";
  headerDiv.appendChild(heading);

  const myLogoLink = document.createElement("a");
  myLogoLink.setAttribute("href", "https://github.com/dobrqka");
  myLogoLink.setAttribute("target", "_blank");
  const myLogo = document.createElement("img");
  myLogo.setAttribute("src", "../src/chickin.png");
  myLogo.style.width = "7rem";
  myLogoLink.style.justifySelf = "center";
  myLogoLink.appendChild(myLogo);
  headerDiv.appendChild(myLogoLink);

  const buttonsBox = document.createElement("div");
  buttonsBox.classList.add("buttons");

  const homePage = document.createElement("button");
  homePage.classList.add("home");
  homePage.classList.add("button");
  homePage.textContent = "Начало";
  //   homePage.onclick = pageLoad();
  buttonsBox.appendChild(homePage);

  const menuPage = document.createElement("button");
  menuPage.classList.add("menu");
  menuPage.classList.add("button");
  menuPage.textContent = "Меню";
  // menuPage.onclick = showMenu();
  buttonsBox.appendChild(menuPage);

  const aboutUs = document.createElement("button");
  aboutUs.classList.add("about");
  aboutUs.classList.add("button");
  aboutUs.textContent = "За нас";
  // aboutUs.onclick = showAboutUs();
  buttonsBox.appendChild(aboutUs);

  // buttons styles

  buttonsBox.style.gridColumn = "2 / 3";
  buttonsBox.style.justifySelf = "center";
  buttonsBox.style.display = "grid";
  buttonsBox.style.gridTemplateColumns = "1fr 1fr 1fr";
  buttonsBox.style.marginBottom = "0.2rem";

  headerDiv.appendChild(buttonsBox);

  const copyText = document.createElement("div");
  copyText.setAttribute("id", "copy");
  copyText.textContent =
    "Добре дошли в сайта на нашата пекарна, която е от всички най-арна! Тази пекарна е семейно наследство и е основана от Арньо Пекарньов през далечната 1763г. Неговият правнук е пекъл банички за революционерите от априлското въстание. Надяваме се да ви харесат нашите вкусотии! Добре дошли сте да разгледате нашите топ предложения в раздел 'Меню'! Да ви е сладко!";
  copyText.style.color = "white";
  copyText.style.display = "grid";
  copyText.style.alignContent = "start";
  copyText.style.justifyContent = "center";
  copyText.style.fontSize = "2rem";
  copyText.style.margin = "7rem 5rem";

  mainArea.appendChild(copyText);

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(mainArea);

  headerDiv.style.display = "grid";
  headerDiv.style.gridTemplateColumns = "1fr 3fr 1fr";
  headerDiv.style.alignItems = "center";
  headerDiv.style.backgroundColor = "#81c784";

  const buttonsBro = document.querySelectorAll(".button");
  buttonsBro.forEach((button) => {
    button.style.border = "none";
    button.style.color = "white";
    button.style.margin = "0 1rem";
    button.style.height = "2.5rem";
    button.style.width = "8rem";
    button.style.alignSelf = "center";
    button.style.borderRadius = "5px";
    button.style.fontSize = "1.5rem";
    button.style.backgroundColor = "brown";
    button.onmouseenter = () => {
      button.style.backgroundColor = "red";
    };
    button.onmouseleave = () => {
      button.style.backgroundColor = "brown";
    };
    button.onmousedown = () => {
      button.style.backgroundColor = "yellow";
    };
    button.onmouseup = () => {
      button.style.backgroundColor = "red";
    };
  });
  return;
}
