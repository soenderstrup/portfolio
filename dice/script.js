class Dice {
  constructor() {
    this.diceElement = this.createDiceElement();
    this.roll();

    this.diceElement.addEventListener("animationend", () => {
      this.diceElement.classList.remove("rolling");
    });

    this.diceElement.addEventListener("click", () => {
      this.roll();
      createTimestamp();
    });
  }

  createDiceElement() {
    const diceElement = document.createElement("div");
    diceElement.classList.add("dice");
    diceContainer.appendChild(diceElement);
    return diceElement;
  }

  roll() {
    if (this.diceElement.classList.contains("rolling")) return;

    this.diceElement.innerHTML = this.getNewEyes(this.randomNumber(6));
    this.diceElement.classList.add("rolling");
  }

  getNewEyes(numberOfEyes) {
    let face;
    let dot = `<span class="dot"></span>`;

    switch (numberOfEyes) {
      case 1:
        face = `<div class="face first-face">
                  ${dot}
                </div>`;
        break;
      case 2:
        face = `<div class="face second-face">
                  ${dot}
                  ${dot}
                </div>`;
        break;
      case 3:
        face = `<div class="face third-face">
                  ${dot}
                  ${dot}
                  ${dot}
                </div>`;
        break;
      case 4:
        face = `<div class="face fourth-face">
                  <div class="column">
                    ${dot}
                    ${dot}
                  </div>
                  <div class="column">
                    ${dot}
                    ${dot}
                  </div>
                </div>`;
        break;
      case 5:
        face = `<div class="face fifth-face">
          	      <div class="column">
                    ${dot}
                    ${dot}
                  </div>
                  <div class="column">
                    ${dot}
                  </div>
                  <div class="column">
                    ${dot}
                    ${dot}
                  </div>
                </div>`;
        break;
      case 6:
        face = `<div class="face sixth-face">
                  <div class="column">
                    ${dot}
                    ${dot}
                    ${dot}
                  </div>
                  <div class="column">
                    ${dot}
                    ${dot}
                    ${dot}
                  </div>
                </div>`;
        break;
    }
    return face;
  }

  randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
}

const selector = document.getElementById("dice-selector");
const diceContainer = document.getElementById("dice-container");
const rollBtn = document.getElementById("roll-btn");
const lastRoll = document.getElementById("last-roll");
let dices = [];

function createDices(noOfDices) {
  for (let i = 0; i < noOfDices; i++) {
    let dice = new Dice();
    dices.push(dice);
  }
  createTimestamp();
}

function removeDices() {
  dices = [];
  diceContainer.innerHTML = "";
}

function createTimestamp() {
  const date = new Date();
  lastRoll.innerText = `last roll: ${format(date.getHours())}:${format(
    date.getMinutes()
  )}:${format(date.getSeconds())} - ${format(date.getDate())}/${format(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;
}

function format(number) {
  return String(number).padStart(2, "0");
}

selector.addEventListener("change", () => {
  const noOfDices = selector.options[selector.selectedIndex].value;
  removeDices();
  createDices(noOfDices);
  localStorage.noOfDices = noOfDices;
});

rollBtn.addEventListener("click", () => {
  dices.forEach((dice) => {
    dice.roll();
  });
  createTimestamp();
});

if (localStorage.noOfDices) {
  selector.selectedIndex = localStorage.noOfDices - 1;
  createDices(localStorage.noOfDices);
} else {
  createDices(1);
}
