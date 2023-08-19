export default function showMenu() {
  const mainArea = document.querySelector(".main-area");
  while (mainArea.firstChild) {
    mainArea.removeChild(mainArea.firstChild);
  }
  mainArea.removeAttribute("style");
  mainArea.style.background = "url(../src/background.jpg)";
  mainArea.classList.add("main-area");
  mainArea.style.display = "grid";
  mainArea.style.gap = "2rem";
  mainArea.style.gridTemplateColumns = "1fr 1fr";
  mainArea.style.justifyItems = "center";
  mainArea.style.alignItems = "center";
  mainArea.style.paddingTop = "2rem";

  const menuOne = document.createElement("div");
  menuOne.classList.add("menu-one");
  const headingOne = document.createElement("h1");
  headingOne.textContent = "Селски хляб";
  headingOne.style.color = "white";
  menuOne.appendChild(headingOne);
  const imageOne = document.createElement("img");
  imageOne.setAttribute("src", "../src/bread.jpg");
  imageOne.style.width = "15vw";
  menuOne.appendChild(imageOne);
  const copyOne = document.createElement("p");
  copyOne.textContent =
    "Селски хляб с квас приготвен по столетна рецепта предавана от поколение на поколение, за да се запази автентиния изключителен български вкус.";
  copyOne.style.margin = "2rem";
  copyOne.style.color = "white";
  copyOne.style.fontWeight = "900";
  menuOne.appendChild(copyOne);
  menuOne.style.width = "40vw";
  menuOne.style.height = "40vw";
  menuOne.style.background = "url('../src/menuback.jpg')";
  menuOne.style.display = "grid";
  menuOne.style.gridTemplateColumns = "1fr";
  menuOne.style.justifyItems = "center";
  menuOne.style.borderRadius = "2rem";
  mainArea.appendChild(menuOne);

  const menuTwo = document.createElement("div");
  menuTwo.classList.add("menu-two");
  const headingTwo = document.createElement("h1");
  headingTwo.textContent = "Баница";
  headingTwo.style.color = "white";
  menuTwo.appendChild(headingTwo);
  const imageTwo = document.createElement("img");
  imageTwo.setAttribute("src", "../src/banica.jpg");
  imageTwo.style.width = "20vw";
  menuTwo.appendChild(imageTwo);
  const copyTwo = document.createElement("p");
  copyTwo.textContent =
    "Убаа арна баница направена по тайната рецепта на тайния кулинарен съвет на българските баби вкусноготви";
  menuTwo.appendChild(copyTwo);
  menuTwo.style.width = "40vw";
  menuTwo.style.height = "40vw";
  menuTwo.style.background = "url('../src/menuback.jpg')";
  copyTwo.style.margin = "2rem";
  copyTwo.style.color = "white";
  copyTwo.style.fontWeight = "900";
  menuTwo.appendChild(copyTwo);
  menuTwo.style.display = "grid";
  menuTwo.style.gridTemplateColumns = "1fr";
  menuTwo.style.justifyItems = "center";
  menuTwo.style.borderRadius = "2rem";
  mainArea.appendChild(menuTwo);

  const menuThree = document.createElement("div");
  menuThree.classList.add("menu-three");
  const headingThree = document.createElement("h1");
  headingThree.textContent = "Тутманик";
  headingThree.style.color = "white";
  menuThree.appendChild(headingThree);
  const imageThree = document.createElement("img");
  imageThree.setAttribute("src", "../src/tutmanik.jpg");
  imageThree.style.width = "20vw";
  menuThree.appendChild(imageThree);
  const copyThree = document.createElement("p");
  copyThree.textContent =
    "Този шедьовър на кулинарното пекарско изкуство заслужава хората да се редят на опашки, за да го вкусят, така както се редят пред лувъра, за да зърнат Мона Лиза.";
  menuThree.appendChild(copyThree);
  menuThree.style.width = "40vw";
  menuThree.style.height = "40vw";
  menuThree.style.background = "url('../src/menuback.jpg')";
  copyThree.style.margin = "2rem";
  copyThree.style.color = "white";
  copyThree.style.fontWeight = "900";
  menuThree.appendChild(copyThree);
  menuThree.style.display = "grid";
  menuThree.style.gridTemplateColumns = "1fr";
  menuThree.style.justifyItems = "center";
  menuThree.style.borderRadius = "2rem";
  mainArea.appendChild(menuThree);

  const menuFour = document.createElement("div");
  menuFour.classList.add("menu-four");
  const headingFour = document.createElement("h1");
  headingFour.textContent = "Кекс";
  headingFour.style.color = "white";
  menuFour.appendChild(headingFour);
  const imageFour = document.createElement("img");
  imageFour.setAttribute("src", "../src/keks.jpg");
  imageFour.style.width = "20vw";
  menuFour.appendChild(imageFour);
  const copyFour = document.createElement("p");
  copyFour.textContent =
    "Перфектен за следобедна закуска в почивният неделен ден. Чудесно допълнение за кафенцето след следобедната дрямка.";
  menuFour.appendChild(copyFour);
  menuFour.style.width = "40vw";
  menuFour.style.height = "40vw";
  menuFour.style.background = "url('../src/menuback.jpg')";
  copyFour.style.margin = "2rem";
  copyFour.style.color = "white";
  copyFour.style.fontWeight = "900";
  menuFour.appendChild(copyFour);
  menuFour.style.display = "grid";
  menuFour.style.gridTemplateColumns = "1fr";
  menuFour.style.justifyItems = "center";
  menuFour.style.borderRadius = "2rem";
  mainArea.appendChild(menuFour);
}
