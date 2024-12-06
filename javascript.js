const operators = ["+", "-", "*", "/"];

let numA;
let numB;
let operator;

let displayContent = document.querySelector("#display-content");

const one = document.querySelector("#one");
one.addEventListener("click", (e) => {
    appendDisplay(one.value);
});

const two = document.querySelector("#two");
two.addEventListener("click", (e) => {
    appendDisplay(two.value);
});

const three = document.querySelector("#three");
three.addEventListener("click", (e) => {
    appendDisplay(three.value);
});

const four = document.querySelector("#four");
four.addEventListener("click", (e) => {
    appendDisplay(four.value);
});

const five = document.querySelector("#five");
five.addEventListener("click", (e) => {
    appendDisplay(five.value);
});

const six = document.querySelector("#six");
six.addEventListener("click", (e) => {
    appendDisplay(six.value);
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", (e) => {
    appendDisplay(seven.value);
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", (e) => {
    appendDisplay(eight.value);
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", (e) => {
    appendDisplay(nine.value);
});

const period = document.querySelector("#period");
period.addEventListener("click", (e) => {
    if (!String(displayContent.textContent).includes(".")) {
        appendDisplay(period.value);
    }
});

const ac = document.querySelector("#clear");
ac.addEventListener("click", (e) => {
    updateDisplay("0");
});

const del = document.querySelector("#delete");
del.addEventListener("click", (e) => {
    deleteDisplayFromRight();
});

updateDisplay("0");

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

function updateDisplay(data) {
    if (typeof data === "number" && isFloat(data)) {
        displayContent.textContent = data.toFixed(4);
        return
    }

    displayContent.textContent = data;
}

function appendDisplay(data) {
    if (displayContent.textContent === "0") {
        updateDisplay(data);
        return;
    }
    displayContent.textContent += data;
    return;
}

function deleteDisplayFromRight() {
    let displayString = String(displayContent.textContent);
    if (displayString.length > 1) {
        updateDisplay(displayString.slice(0, -1));
    } else if (displayString.length === 1) {
        updateDisplay("0");
    }
}

function isFloat(num) {
    return num % 1 !== 0;
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
            updateDisplay(add(a, b));
            return;
        case "-":
            updateDisplay(subtract(a, b));
            return;
        case "*":
            updateDisplay(multiply(a, b));
            return;
        case "/":
            if (b === 0) {
                updateDisplay("baka");
                return;
            }
            updateDisplay(divide(a, b));
            return;
        default:
            updateDisplay("err");
            return;
    }
}
