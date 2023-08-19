export default function showHome() {
  const mainArea = document.querySelector(".main-area");
  while (mainArea.firstChild) {
    mainArea.removeChild(mainArea.firstChild);
  }
  mainArea.removeAttribute("style");
  mainArea.style.background = "url(../src/background.jpg)";
  mainArea.classList.add("main-area");
  mainArea.style.display = "flex";

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
}
