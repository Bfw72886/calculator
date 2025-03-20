let inputNum;
let inputNum2;
let inputOperator;
let displayMaxLength = 11;

const display = document.querySelector("#display");
const calcKeys = document.querySelector("#calcKeys");

function add(num, num2) {return num + num2}

function subtract(num, num2) {return num - num2}

function multiply(num, num2) {return num * num2}

function divide(num, num2) {return num2 != 0 ? num / num2 : "omg, no"}

function operate(num, operator, num2) {
    switch (operator) {
        case "+":
            return add(num, num2);
        case "-":
            return subtract(num, num2);
        case "*":
            return multiply(num, num2);
        case "/":
            return divide(num, num2);            
        default:
            console.log("Something went wrong in operate(num, operator, num2)");
            break;
    }
}

function appendOnDisplay(value) {
    if (display.textContent.length === 1 && display.textContent === "0") {
        clearDisplay();
    }

    if (display.textContent.length < displayMaxLength) {
        display.append(value);
    }
}

function clearDisplay() {
    display.textContent = "";
}

function zeroOnDisplay() {
    display.textContent = "0";
}

calcKeys.addEventListener("click", (event) => {

    const keyClicked = event.target.id;

    switch (keyClicked) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            appendOnDisplay(keyClicked);
            break;
        case "C":
            zeroOnDisplay();
            break;
        default:
            break;
    }
})

zeroOnDisplay();