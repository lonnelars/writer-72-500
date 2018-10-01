let currentParagraph = [];
let allParagraphs = [];

const body = document.querySelector("body");
const textBox = document.querySelector(".text");
const downloadLink = document.querySelector("a.download");

updateText = () => {
  textBox.textContent = currentParagraph.join("");
  if (currentParagraph[currentParagraph.length - 1] === " ") {
    textBox.classList.add("text--trailing-space");
  } else {
    textBox.classList.remove("text--trailing-space");
  }
};

body.onkeydown = event => {
  console.log(event);
  if (event.key === "Backspace") {
    currentParagraph = currentParagraph.slice(0, currentParagraph.length - 1);
  } else if (event.key === "Enter") {
    allParagraphs.push(currentParagraph);
    currentParagraph = [];
  } else if (event.key.length === 1) {
    currentParagraph.push(event.key);
  }
  updateText();
};

downloadLink.onclick = event => {
  const plainText =
    allParagraphs.reduce(
      (acc, paragraph) => acc + paragraph.join("") + "\n\n",
      ""
    ) +
    "\n\n" +
    currentParagraph.join("");
  event.target.href = "data:text/plain," + encodeURI(plainText);
};
