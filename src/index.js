let currentParagraph = [];
let allParagraphs = [];

const body = document.querySelector("body");
const textBox = document.querySelector(".text");
const a = document.querySelector("a");

updateText = () => {
  textBox.textContent = currentParagraph.join("");
  if (currentParagraph[currentParagraph.length - 1] === " ") {
    textBox.classList.add("text--trailing-space");
  } else {
    textBox.classList.remove("text--trailing-space");
  }
};

body.onkeypress = event => {
  if (event.key === "Backspace") {
    currentParagraph = currentParagraph.slice(0, currentParagraph.length - 1);
  } else if (event.key === "Enter") {
    allParagraphs.push(currentParagraph);
    currentParagraph = [];
  } else {
    currentParagraph.push(event.key);
  }
  console.log(allParagraphs);
  updateText();
};

a.onclick = event => {
  const text = allParagraphs.reduce(
    (acc, paragraph) => acc + paragraph.join("") + "\n",
    ""
  );
  event.target.href = "data:," + encodeURI(text);
};
