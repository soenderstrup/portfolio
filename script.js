/*NAVBAR*/
document.getElementById("linked-in").onclick = function () {
  window.open(
    "https://www.linkedin.com/in/mads-sj/",
    "_blank"
  );
};

document.getElementById("github").onclick = function () {
  window.open("https://github.com/Mads-SJ", "_blank");
};

/*PROJECTS*/
document.getElementById("dice-roller-btn").onclick = function () {
  window.open("/dice", "_blank");
};

document.getElementById("reaction-time-btn").onclick = function () {
  window.open("/reaction-time", "_blank");
};

/*
document.getElementById("weather-app-btn").onclick = function () {
  alert(
    "This app had to be taken down to hide the API key. The API key has been revoked. Please take a look at the code instead."
  );
};*/

document.getElementById("todo-app-btn").onclick = function () {
  window.open("/todo-app", "_blank");
};

document.getElementById("tip-calculator-btn").onclick = function () {
  window.open("/tip-calculator", "_blank");
};

document.getElementById("countdown-btn").onclick = function () {
  window.open("/countdown", "_blank");
};

document.getElementById("portfolio-github-btn").onclick = function () {
  window.open("https://github.com/Mads-SJ/portfolio", "_blank");
};

document.getElementById("dice-roller-github-btn").onclick = function () {
  window.open("https://github.com/Mads-SJ/dice-roller", "_blank");
};

document.getElementById("reaction-time-github-btn").onclick = function () {
  window.open("https://github.com/Mads-SJ/reaction-time", "_blank");
};

/*document.getElementById("weather-app-github-btn").onclick = function () {
  window.open("https://github.com/Mads-SJ/react-weather-app", "_blank");
};*/

document.getElementById("todo-app-github-btn").onclick = function () {
  window.open("https://github.com/Mads-SJ/todo-react-app", "_blank");
};

document.getElementById("tip-calculator-github-btn").onclick = function () {
  window.open("https://github.com/Mads-SJ/tip-calculator", "_blank");
};

document.getElementById("countdown-github-btn").onclick = function () {
  window.open("https://github.com/Mads-SJ/birthday-countdown", "_blank");
};

/*SLIDESHOW*/
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const length = slides.length;

showSlide(slideIndex);

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function showSlide(index) {
  slideIndex = index;
  for (let i = 0; i < length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("dot-active");
  }

  if (slideIndex < 0) slideIndex = length - 1;
  else if (slideIndex > length - 1) slideIndex = 0;

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("dot-active");
}

/*BACK TO TOP BUTTON*/
const topBtn = document.getElementById("top-btn");

topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

window.onscroll = () => {
  const pixels = 1080;
  if (
    document.body.scrollTop > pixels ||
    document.documentElement.scrollTop > pixels
  ) {
    if (!topBtn.classList.contains("active")) {
      topBtn.className = "active";
      topBtn.style.display = "block";
    }
  } else {
    if (topBtn.classList.contains("active")) {
      topBtn.className = "hidden";
      setTimeout(() => (topBtn.style.display = "none"), 250);
    }
  }
};

/*COPYRIGHT*/
const year = new Date().getFullYear();
document.getElementById("copyright").innerText = `© Copyright ${year}, Mads Sønderstrup-Jensen`;

const greetingSpan = document.getElementById("greeting");
const date = new Date();
if (date.getHours() > 6 && date.getHours() < 10) {
  greetingSpan.innerText = "Good morning";
} else if (date.getHours() < 18) {
  greetingSpan.innerText = "Hi";
} else if (date.getHours() < 24) {
  greetingSpan.innerText = "Good evening";
} else {
  greetingSpan.innerText = "Hey night owl";
}

const typedOutSpan = document.getElementById("typed-out");
const texts = [
  "a Software Developer.",
  "a CS Student.",
  "a Board Game Enthusiast.",
  "a Nature Enjoyer.",
  "an Avid Reader.",
]

let i = 0;
let wordIndex = 0;
let typingDelays = [60, 80, 100];
const timeBetweenDeletingWords = 2700;
const timeBetweenWritingWords = 1400;

function writeText(text) {
  if (i < text.length) {
    typedOutSpan.innerHTML += text.charAt(i);
    i++;
    const typingDelay = typingDelays[Math.floor(Math.random() * typingDelays.length)];
    setTimeout(writeText, typingDelay, text);
  } else {
    if (wordIndex === texts.length - 1) wordIndex = 0;
    else wordIndex++;
    toggleCursorBlink();
    setTimeout(() => {
      toggleCursorBlink();
      deleteText();
    }, timeBetweenDeletingWords);
  }
};

function deleteText() {
  const typedOutSpanText = typedOutSpan.innerText;
  if (i > 0) {
    typedOutSpan.innerHTML = typedOutSpanText.substring(0, i - 1);
    i--;
    setTimeout(deleteText, typingDelays[0] / 2, typedOutSpanText);
  } else {
    toggleCursorBlink();
    setTimeout(() => {
      toggleCursorBlink();
      writeText(texts[wordIndex]);
    }, timeBetweenWritingWords);
  }
}

function toggleCursorBlink() {
  document.getElementById("text-cursor").classList.toggle("text-cursor-blink");
}

writeText(texts[wordIndex]);