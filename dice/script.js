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
