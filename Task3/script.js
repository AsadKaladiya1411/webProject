const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', ({ target }) => {
        const value = target.value;

        if (value === 'C') {
            clearCalculator();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else {
            appendToDisplay(value);
        }
    });
});

function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function setOperator(value) {
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculate();
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}