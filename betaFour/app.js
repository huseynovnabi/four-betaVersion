"use stirct"

const h1Element = document.getElementById("movingText");
const text = h1Element.textContent;
let currentIndex = 0;
const delay = 200;
const eraseDelay = 1000;

function eraseText() {
    if (currentIndex >= 0) {
        h1Element.textContent = text.slice(0, currentIndex);
        currentIndex--;
        setTimeout(eraseText, delay);
    } else {
        setTimeout(writeText, eraseDelay);
    }
}

function writeText() {
    if (currentIndex < text.length) {
        h1Element.textContent = text.slice(0, currentIndex + 1);
        currentIndex++;
        setTimeout(writeText, delay);
    } else {
        setTimeout(eraseText, eraseDelay);
    }
}

writeText(); 
