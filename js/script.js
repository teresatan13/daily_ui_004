class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
}

    function clearScreen() {
        document.getElementById("result").value = '';
    }

    function remove() {

    }


    function display(value) {
        document.getElementById("result").value += value;
    }


    function calculate() {
        let expression = document.getElementById("result").value;
        let result = eval(expression);
        document.getElementById("result").value = result;
    }
    


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const previousOperandTextElement = document.querySelector('[data-previous-operand')
const currentOperandTextElement = document.querySelector('[data-current-operand')
