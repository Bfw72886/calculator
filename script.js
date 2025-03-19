let inputNum;
let inputNum2;
let inputOperator;

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