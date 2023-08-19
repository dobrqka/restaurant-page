export default function aboutUs() {
  const mainArea = document.querySelector(".main-area");
  while (mainArea.firstChild) {
    mainArea.removeChild(mainArea.firstChild);
  }

  mainArea.removeAttribute("style");
  mainArea.style.background = "url(../src/background.jpg)";
  mainArea.classList.add("main-area");

  const aboutArea = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "За нас";
  heading.style.color = "white";
  heading.style.fontSize = "2.5rem";
  aboutArea.appendChild(heading);

  const aboutImage = document.createElement("img");
  aboutImage.setAttribute("src", "../src/babi.jpg");
  aboutImage.style.width = "60vw";
  aboutArea.appendChild(aboutImage);

  const aboutCopy = document.createElement("p");
  aboutCopy.textContent =
    "Гордеем се с нашия екип от професионалисти с дългогодишен опит. Местни работливи и весели баби, пазителки на многовековни кулинарни тайни, който знаят и вашите тайни. Докато се приготвят нашите изделия, бабите им пеят стари български песни, вкарвайки в тях магията на българския дух.";
  aboutCopy.style.color = "white";
  aboutCopy.style.fontSize = "1.5rem";
  aboutCopy.style.padding = "0 10rem";
  aboutCopy.style.justifySelf = "center";
  aboutArea.appendChild(aboutCopy);

  aboutArea.style.display = "grid";
  aboutArea.style.gridTemplateColumns = "1fr";
  aboutArea.style.justifyItems = "center";
  aboutArea.style.height = "70vh";

  mainArea.appendChild(aboutArea);
}
