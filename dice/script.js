class Dice {
  constructor() {
    const diceElement = this.createDiceElement();
    this.element = diceElement;
    diceContainer.appendChild(diceElement);

    this.element.addEventListener("animationend", () => {
      this.element.classList.remove("rolling");
    });

    this.element.addEventListener("click", () => {
      if (this.element.classList.contains("rolling")) return;
      this.roll();
    });
  }

  roll() {
    this.getFace();
    this.element.classList.add("rolling");
  }

  createDiceElement() {
    const diceElement = document.createElement("div");
    diceElement.classList.add("dice");
    diceElement.appendChild(this.createFace(1));
    return diceElement;
  }

  getFace() {
    const oldFace = this.element.firstChild;
    const newFace = this.createFace(this.randomNumber(6));
    this.element.replaceChild(newFace, oldFace);
  }

  createFace(numberOfEyes) {
    let face = document.createElement("div");
    face.classList.add("face");

    switch (numberOfEyes) {
      case 1:
        face.classList.add("first-face");
        face.appendChild(this.createDot());
        break;
      case 2:
        face.classList.add("second-face");
        for (let i = 0; i < 2; i++) {
          face.appendChild(this.createDot());
        }
        break;
      case 3:
        face.classList.add("third-face");
        for (let i = 0; i < 3; i++) {
          face.appendChild(this.createDot());
        }
        break;
      case 4:
        face.classList.add("fourth-face");
        for (let i = 0; i < 2; i++) {
          const column = this.createDotColumn();
          for (let j = 0; j < 2; j++) {
            column.appendChild(this.createDot());
          }
          face.appendChild(column);
        }
        break;
      case 5:
        face.classList.add("fifth-face");
        for (let i = 0; i < 2; i++) {
          const column = this.createDotColumn();

          if (i === 1) {
            const column = this.createDotColumn();
            column.appendChild(this.createDot());
            face.appendChild(column);
          }
          for (let j = 0; j < 2; j++) {
            column.appendChild(this.createDot());
          }
          face.appendChild(column);
        }
        break;
      case 6:
        face.classList.add("sixth-face");
        for (let i = 0; i < 2; i++) {
          const column = this.createDotColumn();
          for (let j = 0; j < 3; j++) {
            column.appendChild(this.createDot());
          }
          face.appendChild(column);
        }
        break;
    }
    return face;
  }

  createDotColumn() {
    const column = document.createElement("div");
    column.classList.add("column");
    return column;
  }

  createDot() {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    return dot;
  }

  randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
}

const selector = document.getElementById("dice-selector");
const diceContainer = document.getElementById("dice-container");
const rollBtn = document.getElementById("roll-btn");
let dices = [];

function createNumberOfDices(noOfDices) {
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
  createNumberOfDices(noOfDices);
});

rollBtn.addEventListener("click", () => {
  dices.forEach((dice) => {
    dice.roll();
  });
});

createNumberOfDices(1);
