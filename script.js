let savedNum = 0;
let savedOperator = "+";
let displayMaxLength = 10;
let isCalculating = false;

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
        emptyDisplay();
    }

    if (display.textContent.length < displayMaxLength) {
        display.append(value);
    }
}

function emptyDisplay() {
    display.textContent = "";
}

function clear() {
    display.textContent = "0";
}

function backSpace() {
    display.textContent = display.textContent.length > 1 ? display.textContent.slice(0, display.textContent.lastIndexOf()) : 0;
}

function negation() {
    if (display.textContent === "0") {
        return;
    }

    if (display.textContent.charAt(0) != "-") {
        display.textContent = "-" + display.textContent;
    } else {
        display.textContent = display.textContent.slice(1, display.length);
    }
}

function pressOperator(operator) {
    savedOperator = operator;
    isCalculating = true;
}

function equals() {
    display.textContent = operate(savedNum, savedOperator, +display.textContent);
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
            if (!isCalculating) {
                appendOnDisplay(keyClicked);
            } else {                
                savedNum = +display.textContent;
                display.textContent = keyClicked;
                isCalculating = false;
            }
            break;
        case "C":
            clear();
            savedNum = 0;
            savedOperator = "+";
            break;
        case "BS":
            backSpace();
            break;
        case "+/-":
            negation();
            break;
        case ".":
            display.append(keyClicked);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            pressOperator(keyClicked);
            break;
        case "=":
            equals();
            break;
        default:
            break;
    }
})

clear();