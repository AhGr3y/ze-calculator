const operators = ["+", "-", "*", "/"];

let collatedInput = document.querySelector("#collated-input");
let input = document.querySelector("#input");

updateInputDisplay("0");

const zero = document.querySelector("#zero");
zero.addEventListener("click", (e) => {
    if (String(input.textContent) === "0") {
        return;
    }
    appendInputDisplay(zero.value);
});

const one = document.querySelector("#one");
one.addEventListener("click", (e) => {
    appendInputDisplay(one.value);
});

const two = document.querySelector("#two");
two.addEventListener("click", (e) => {
    appendInputDisplay(two.value);
});

const three = document.querySelector("#three");
three.addEventListener("click", (e) => {
    appendInputDisplay(three.value);
});

const four = document.querySelector("#four");
four.addEventListener("click", (e) => {
    appendInputDisplay(four.value);
});

const five = document.querySelector("#five");
five.addEventListener("click", (e) => {
    appendInputDisplay(five.value);
});

const six = document.querySelector("#six");
six.addEventListener("click", (e) => {
    appendInputDisplay(six.value);
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", (e) => {
    appendInputDisplay(seven.value);
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", (e) => {
    appendInputDisplay(eight.value);
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", (e) => {
    appendInputDisplay(nine.value);
});

const period = document.querySelector("#period");
period.addEventListener("click", (e) => {
    if (!String(input.textContent).includes(".")) {
        appendInputDisplay(period.value);
    }
});

const ac = document.querySelector("#clear");
ac.addEventListener("click", (e) => {
    updateInputDisplay("0");
    updateCollatedInputDisplay("");
});

const del = document.querySelector("#delete");
del.addEventListener("click", (e) => {
    deleteDisplayFromRight();
});

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

function updateCollatedInputDisplay(data) {
    collatedInput.textContent = data;
}

function appendCollatedInputDisplay(data) {
    collatedInput.textContent += data;
}

function updateInputDisplay(data) {
    if (typeof data === "number" && isFloat(data)) {
        input.textContent = data.toFixed(4);
        return
    }

    input.textContent = data;
}

function appendInputDisplay(data) {
    if (input.textContent === "0") {
        updateInputDisplay(data);
        return;
    }
    input.textContent += data;
    return;
}

function deleteDisplayFromRight() {
    let displayString = String(input.textContent);
    if (displayString.length > 1) {
        updateInputDisplay(displayString.slice(0, -1));
    } else if (displayString.length === 1) {
        updateInputDisplay("0");
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
        updateInputDisplay(input, a);
        return;
    }

    if (inputParts.length > 1) {
        operator = inputParts[1];
        b = Number(inputParts[2]);
    }

    switch(operator) {
        case "+":
            updateInputDisplay(add(a, b));
            return;
        case "-":
            updateInputDisplay(subtract(a, b));
            return;
        case "*":
            updateInputDisplay(multiply(a, b));
            return;
        case "/":
            if (b === 0) {
                updateInputDisplay("baka");
                return;
            }
            updateInputDisplay(divide(a, b));
            return;
        default:
            updateInputDisplay("err");
            return;
    }
}
