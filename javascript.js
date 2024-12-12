const operators = ["+", "-", "*", "/"];
const buttonType = {
    NUMBER: "number",
    OPERATOR: "operator",
    DELETOR: "deletor",
    EXECUTOR: "execute",
    SYMBOL: "symbol",
};

let lastPressedButtonType = "";
let collatedInput = document.querySelector("#collated-input");
let input = document.querySelector("#input");

updateInputDisplay("0");

const zero = document.querySelector("#zero");
zero.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(zero.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    if (String(input.textContent) === "0") {
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(zero.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const one = document.querySelector("#one");
one.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(one.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(one.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const two = document.querySelector("#two");
two.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(two.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(two.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const three = document.querySelector("#three");
three.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(three.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(three.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const four = document.querySelector("#four");
four.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(four.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(four.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const five = document.querySelector("#five");
five.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(five.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(five.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const six = document.querySelector("#six");
six.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(six.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(six.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(seven.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(seven.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(eight.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(eight.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        updateInputDisplay(nine.value);
        lastPressedButtonType = buttonType.NUMBER;
        return;
    }
    appendInputDisplay(nine.value);
    lastPressedButtonType = buttonType.NUMBER;
});

const period = document.querySelector("#period");
period.addEventListener("click", (e) => {
    if ((lastPressedButtonType === "" || lastPressedButtonType === buttonType.OPERATOR) ||
        (lastPressedButtonType === buttonType.DELETOR && input.textContent === "0") ||
        (lastPressedButtonType === buttonType.NUMBER && input.textContent === "0")) {
        updateInputDisplay("0.");
        lastPressedButtonType = buttonType.SYMBOl;
        return;
    }
    if (!String(input.textContent).includes(".")) {
        appendInputDisplay(period.value);
        lastPressedButtonType = buttonType.SYMBOL;
        return;
    }
});

const ac = document.querySelector("#clear");
ac.addEventListener("click", (e) => {
    updateInputDisplay("0");
    updateCollatedInputDisplay("");
    lastPressedButtonType = buttonType.DELETOR;
});

const del = document.querySelector("#delete");
del.addEventListener("click", (e) => {
    if (lastPressedButtonType === buttonType.OPERATOR) {
        return;
    }
    if (lastPressedButtonType === buttonType.EXECUTOR) {
        updateCollatedInputDisplay("");
        return;
    }
    deleteDisplayFromRight();
    lastPressedButtonType = buttonType.DELETOR;
});

const addButton = document.querySelector("#add");
addButton.addEventListener("click", (e) => {
    if (collatedInput.textContent === "") {
        updateCollatedInputDisplay(`${input.textContent} + `);
        lastPressedButtonType = buttonType.OPERATOR;
        return;
    }

    let operator = extractOperator(collatedInput.textContent);

    if (String(collatedInput.textContent).slice(-2, -1) === operator) {
        if (lastPressedButtonType === buttonType.OPERATOR) {
            collatedInput.textContent = collatedInput.textContent.replace(` ${operator} `, " + ");
            lastPressedButtonType = buttonType.OPERATOR;
            return;
        }
        if (lastPressedButtonType === buttonType.NUMBER) {
            let collatedInputText = collatedInput.textContent + input.textContent;
            let result = operate(collatedInputText);
            updateCollatedInputDisplay(`${result} + `);
            updateInputDisplay(result);
            lastPressedButtonType = buttonType.OPERATOR;
            return;
        }  
    }

    // Scenario where collatedInputDisplay looks like 'a + b ='
    updateCollatedInputDisplay(`${input.textContent} + `);
    lastPressedButtonType = buttonType.OPERATOR;
    return;
});

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", (e) => {
    if (collatedInput.textContent === "") {
        updateCollatedInputDisplay(`${input.textContent} - `);
        lastPressedButtonType = buttonType.OPERATOR;
        return;
    }

    let operator = extractOperator(collatedInput.textContent);

    if (String(collatedInput.textContent).slice(-2, -1) === operator) {
        if (lastPressedButtonType === buttonType.OPERATOR) {
            collatedInput.textContent = collatedInput.textContent.replace(` ${operator} `, " - ");
            lastPressedButtonType = buttonType.OPERATOR;
            return;
        }
        if (lastPressedButtonType === buttonType.NUMBER) {
            let collatedInputText = collatedInput.textContent + input.textContent;
            let result = operate(collatedInputText);
            updateCollatedInputDisplay(`${result} - `);
            updateInputDisplay(result);
            lastPressedButtonType = buttonType.OPERATOR;
            return;
        }  
    }

    updateCollatedInputDisplay(`${input.textContent} - `);
    lastPressedButtonType = buttonType.OPERATOR;
    return;
});

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", (e) => {
    if (collatedInput.textContent === "") {
        updateCollatedInputDisplay(`${input.textContent} * `);
        lastPressedButtonType = buttonType.OPERATOR;
        return;
    }

    let operator = extractOperator(collatedInput.textContent);

    if (String(collatedInput.textContent).slice(-2, -1) === operator) {
        if (lastPressedButtonType === buttonType.OPERATOR) {
            collatedInput.textContent = collatedInput.textContent.replace(` ${operator} `, " * ");
            lastPressedButtonType = buttonType.OPERATOR;
            return;
        }
        if (lastPressedButtonType === buttonType.NUMBER) {
            let collatedInputText = collatedInput.textContent + input.textContent;
            let result = operate(collatedInputText);
            updateCollatedInputDisplay(`${result} * `);
            updateInputDisplay(result);
            lastPressedButtonType = buttonType.OPERATOR;
            return;
        }  
    }

    updateCollatedInputDisplay(`${input.textContent} * `);
    lastPressedButtonType = buttonType.OPERATOR;
    return;
});

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", (e) => {
    if (collatedInput.textContent === "") {
        updateCollatedInputDisplay(`${input.textContent} / `);
        lastPressedButtonType = buttonType.OPERATOR;
        return;
    }

    let operator = extractOperator(collatedInput.textContent);

    if (String(collatedInput.textContent).slice(-2, -1) === operator) {
        if (lastPressedButtonType === buttonType.OPERATOR) {
            collatedInput.textContent = collatedInput.textContent.replace(` ${operator} `, " / ");
            lastPressedButtonType = buttonType.OPERATOR;
            return;
        }
        if (lastPressedButtonType === buttonType.NUMBER) {
            let collatedInputText = collatedInput.textContent + input.textContent;
            let result = operate(collatedInputText);
            updateCollatedInputDisplay(`${result} / `);
            updateInputDisplay(result);
            lastPressedButtonType = buttonType.OPERATOR;
            return;
        }  
    }

    updateCollatedInputDisplay(`${input.textContent} / `);
    lastPressedButtonType = buttonType.OPERATOR;
    return;
});

const operateButton = document.querySelector("#operate");
operateButton.addEventListener("click", (e) => {
    if (lastPressedButtonType === "") {
        updateCollatedInputDisplay(`${input.textContent} =`);
        lastPressedButtonType = buttonType.EXECUTOR;
        return;
    }
    
    if (lastPressedButtonType === buttonType.NUMBER) {
        let operator = extractOperator(collatedInput.textContent);

        if (collatedInput.textContent && String(collatedInput.textContent).slice(-2, -1) === operator) {
            let inputText = collatedInput.textContent + input.textContent;
            let result = operate(inputText);

            updateCollatedInputDisplay(`${inputText} =`);
            updateInputDisplay(`${result}`);
            lastPressedButtonType = buttonType.EXECUTOR;
            return;
        }

        if (Number(input.textContent) === 0) {
            updateCollatedInputDisplay("0 =");
            updateInputDisplay("0");
            lastPressedButtonType = buttonType.EXECUTOR;
            return;
        }

        updateCollatedInputDisplay(`${input.textContent} =`);
        lastPressedButtonType = buttonType.EXECUTOR;
        return;
    }
    
    if (lastPressedButtonType === buttonType.SYMBOL) {
        if (Number(input.textContent) === 0) {
            updateCollatedInputDisplay("0 =");
            updateInputDisplay("0");
            lastPressedButtonType = buttonType.EXECUTOR;
            return;
        }
    }

    if (lastPressedButtonType === buttonType.OPERATOR) {

        // BEFORE               AFTER
        // top: 2 +             top: 2 + 2 =
        // bottom: 2            bottom: 4
        // last button: +       last button: =
        const firstNum = collatedInput.textContent.split(" ")[0];
        const inputText = `${collatedInput.textContent} ${firstNum}`;
        const result = operate(inputText);

        updateCollatedInputDisplay(`${collatedInput.textContent}${result} =`);
        updateInputDisplay(result);
        lastPressedButtonType = buttonType.EXECUTOR;
        return;
    }

    if (lastPressedButtonType === buttonType.EXECUTOR) {

        // BEFORE               AFTER
        // top: 1 + 2 =         top: 3 + 2 =
        // bottom: 3            bottom: 5
        // last button: =       last button: =
        if (hasOperator(collatedInput.textContent)) {
            let prevResult = input.textContent;
            let inputParts = extractInputParts(collatedInput.textContent.slice(0, -1));
            let newInputText = `${prevResult.trim()} ${inputParts[1].trim()} ${inputParts[2].trim()}`;
            let result = operate(newInputText);

            updateCollatedInputDisplay(`${prevResult} ${inputParts[1].trim()} ${inputParts[2]} =`);
            updateInputDisplay(result);
            lastPressedButtonType = buttonType.EXECUTOR;
            return;
        }

    }
});

function add(a, b) {
    const result = a + b;
    if (isFloat(result)) {
        const split = String(result).split(".");
        if (split[1].length > 4) {
            return result.toFixed(4);
        }
    }
    return result;
}

function subtract(a, b) {
    const result = a - b;
    if (isFloat(result)) {
        const split = String(result).split(".");
        if (split[1].length > 4) {
            return result.toFixed(4);
        }
    }
    return result;
}

function multiply(a, b) {
    const result = a * b;
    if (isFloat(result)) {
        const split = String(result).split(".");
        if (split[1].length > 4) {
            return result.toFixed(4);
        }
    }
    return result;
}

function divide(a, b) {
    const result = a / b;
    if (isFloat(result)) {
        const split = String(result).split(".");
        if (split[1].length > 4) {
            return result.toFixed(4);
        }
    }
    return result;
}

function updateCollatedInputDisplay(data) {
    collatedInput.textContent = data;
}

function appendCollatedInputDisplay(data) {
    collatedInput.textContent += data;
}

function updateInputDisplay(data) {
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

function hasOperator(input) {
    let operator = operators.filter(operator => input.includes(operator))[0];
    if (!operator) {
        return false;
    }
    return true;
}

function extractOperator(input) {
    // split input by " "
    // loop thru each item
    // for each item, loop thru operators
    // if item === operator, return item
    let operator = "";
    let split = input.split(" ");
    split.forEach(elem => {
        operators.forEach(op => {
            if (elem === op) {
                operator = elem;
            }
        })
    });

    return operator;
}

function extractInputParts(input) {
    if (!hasOperator(input)) {
        return [input];
    }

    return input.split(" ");
}

function operate(input) {
    const inputParts = extractInputParts(input);

    let a = Number(inputParts[0]);
    let b;
    let operator;

    if (inputParts.length === 1) {
        return a;
    }

    if (inputParts.length > 1) {
        operator = inputParts[1];
        b = Number(inputParts[2]);
    }

    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if (b === 0) {
                return "baka";
            }
            return divide(a, b);
        default:
            return "err";
    }
}
