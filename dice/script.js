class Dice {
  constructor() {
    this.diceElement = this.createDiceElement();

    this.diceElement.addEventListener("animationend", () => {
      this.diceElement.classList.remove("rolling");
    });

    this.diceElement.addEventListener("click", () => {
      this.roll();
    });
  }

  createDiceElement() {
    const diceElement = document.createElement("div");
    diceElement.classList.add("dice");
    diceElement.innerHTML = this.getNewEyes(1);
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
let dices = [];

function createDices(noOfDices) {
  for (let i = 0; i < noOfDices; i++) {
    let dice = new Dice();
    dices.push(dice);
  }
}

function removeDices() {
  dices = [];
  diceContainer.innerHTML = "";
}

selector.addEventListener("change", () => {
  const noOfDices = selector.options[selector.selectedIndex].value;
  removeDices();
  createDices(noOfDices);
});

rollBtn.addEventListener("click", () => {
  dices.forEach((dice) => {
    dice.roll();
  });
});

createDices(1);
