
let a = 1;
let op = "+";
let b = 2;
let displayContainer = document.querySelector("#display");
let calculatorContainer = document.querySelector("#calculatorContainer");

calculatorContainer.addEventListener('click', (event) => {
    let eventTriggered = event.target;

    if (eventTriggered instanceof HTMLButtonElement) {
        let content = eventTriggered.dataset.content;
        content = +content;
        if (!isNaN(content)) {
            displayContainer.textContent += content;
        }
    }
});


function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "ERROR";
    }
}


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
