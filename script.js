const button = document.getElementById("changeTitle");
const title = document.getElementById("title");
button.addEventListener("click", () => {
  title.textContent = "JavaScript is geweldig!";
});

const paragraphButton = document.getElementById("addText");
const paragraphText = document.getElementById("paragraph");
paragraphButton.addEventListener("click", () => {
  paragraphText.textContent += " Hier is extra tekst!";
});

const colorButton = document.getElementById("changeColor");
const colorBox = document.getElementById("colorBox");
colorButton.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
  colorBox.style.background-color = randomColor)
});

const hideButton = document.getElementById("hideText");
const text = document.getElementById("text");
hideButton.addEventListener("click", () => {
  text.setAttribute("style", "display: none");
});

