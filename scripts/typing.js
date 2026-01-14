const texts = ["Software Engineer", "Full Stack Developer"];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function type() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}

type();
