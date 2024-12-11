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
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colorBox.setAttribute("style", `background-color: ${randomColor}`);
});

const hideButton = document.getElementById("hideText");
const text = document.getElementById("text");
hideButton.addEventListener("click", () => {
  text.setAttribute("style", "display: none");
});

const addItemButton = document.getElementById("addItem");
const list = document.getElementById("itemList");
addItemButton.addEventListener("click", () => {
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode("Nieuw item"));
  list.appendChild(newLi);
});

const textColorButton = document.getElementById("changeTextColor");
const coloredtext = document.getElementById("coloredText");
textColorButton.addEventListener("click", () => {
  coloredtext.setAttribute("style", "color: red");
});

const inputButton = document.getElementById("showInput");
const userInput = document.getElementById("userInput");
const userOutput = document.getElementById("output");
inputButton.addEventListener("click", () => {
  userOutput.textContent = userInput.value;
});
