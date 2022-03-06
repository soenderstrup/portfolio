console.log("hello world");

let bill = 0;
let persons = 0;
let tip = 0;

let strongCyan = "hsl(172, 67%, 45%)";
let whiteColor = "white";
let otherColor = "hsl(183, 100%, 15%)";

let billInput = document.getElementById("bill");
let personsInput = document.getElementById("persons");
let tipAmount = document.getElementById("tip-amount");
let totalAmount = document.getElementById("total");
let btn5 = document.getElementById("btn-5");
let btn10 = document.getElementById("btn-10");
let btn15 = document.getElementById("btn-15");
let btn25 = document.getElementById("btn-25");
let btn50 = document.getElementById("btn-50");
let noneBtn = document.getElementById("none");
let btnCustom = document.getElementById("custom");
let resetBtn = document.getElementById("reset");

function getBill() {
    let potentialNumber = billInput.value;
    if (potentialNumber > 0) {
        return potentialNumber;
    }
}

function getPersons() {
    let potentialNumber = personsInput.value;
    if (potentialNumber > 0) {
        return potentialNumber;
    }
}

function calculateTotal() {
    bill = getBill();
    persons = getPersons();

    if (bill > 0 && persons > 0) {
        let calculatedTip = 0;
        if (tip > 0) {
            calculatedTip = (Math.round((bill * (tip / 100)) * 100) / 100).toFixed(2);
            tipAmount.innerText = "$" + calculatedTip;
        }

        totalAmount.innerText = "$" + (Math.round((bill / persons + calculatedTip / persons) * 100) / 100).toFixed(2);
    }
    else {
        totalAmount.innerText = "$0";
        tipAmount.innerText = "$0";
    }
}

function setTip5() {
    tip = 5;
    calculateTotal();
    resetTipButtons();
    btn5.classList.add("selected-tip");
}

function setTip10() {
    tip = 10;
    calculateTotal();
    resetTipButtons();
    btn10.classList.add("selected-tip");
}

function setTip15() {
    tip = 15;
    calculateTotal();
    resetTipButtons();
    btn15.classList.add("selected-tip");
}

function setTip25() {
    tip = 25;
    calculateTotal();
    resetTipButtons();
    btn25.classList.add("selected-tip");
}

function setTip50() {
    tip = 50;
    calculateTotal();
    resetTipButtons();
    btn50.classList.add("selected-tip");
}

function setTipNone() {
    tip = 0;
    calculateTotal();
    resetTipButtons();
    tipAmount.innerText = "$0";
}

function reset() {
    let bill = 0;
    let persons = 0;
    let tip = 0;
    billInput.value = "";
    personsInput.value = "";
    tipAmount.innerText = "$0";
    totalAmount.innerText = "$0";
}

function resetTipButtons() {
   btn5.classList.remove("selected-tip");
   btn10.classList.remove("selected-tip");
   btn15.classList.remove("selected-tip");
   btn25.classList.remove("selected-tip");
   btn50.classList.remove("selected-tip");
   noneBtn.classList.remove("selected-tip");
}

btn5.addEventListener("click", setTip5);
btn10.addEventListener("click", setTip10);
btn15.addEventListener("click", setTip15);
btn25.addEventListener("click", setTip25);
btn50.addEventListener("click", setTip50);
noneBtn.addEventListener("click", setTipNone);

billInput.addEventListener("input", calculateTotal);
personsInput.addEventListener("input", calculateTotal);
resetBtn.addEventListener("click", reset);
