const dice = document.getElementById("dice");
const rollBtn = document.getElementById("roll-btn");

function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function roll() {
  dice.innerText = randomNumber(6);
}

rollBtn.addEventListener("click", () => {
  dice.classList.add("rolling");
});

dice.addEventListener("animationend", () => {
  dice.classList.remove("rolling");
  roll();
});

dice.innerText = 6;
