const operators = ["+", "-", "*", "/"];

let numA;
let numB;
let operator;
let displayContent = document.querySelector("#display-content");

updateDisplay(displayContent, 0);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function extractOperator(input) {
    let operator = operators.filter(operator => input.includes(operator))[0];
    if (!operator) {
        return "";
    }
    return operator;
}

function extractInputParts(input) {
    let operator = extractOperator(input);
    if (operator === "") {
        return [input];
    }
    let operands = input.split(operator);
    operands.splice(1, 0, operator);
    return operands;
}

function updateDisplay(display, text) {
    display.textContent = text;
}

function operate(input) {
    const inputParts = extractInputParts(input);

    let a = Number(inputParts[0]);
    let b;
    let operator;

    if (inputParts.length === 1) {
        updateDisplay(displayContent, a);
        return;
    }

    if (inputParts.length > 1) {
        operator = inputParts[1];
        b = Number(inputParts[2]);
    }

    switch(operator) {
        case "+":
            updateDisplay(displayContent, add(a, b));
            return;
        case "-":
            updateDisplay(displayContent, subtract(a, b));
            return;
        case "*":
            updateDisplay(displayContent, multiply(a, b));
            return;
        case "/":
            if (b === 0) {
                updateDisplay(displayContent, "baka");
                return;
            }
            updateDisplay(displayContent, divide(a, b));
            return;
        default:
            updateDisplay(displayContent, "err");
            return;
    }
}


