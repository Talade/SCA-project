class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement)
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}

clear() {
    this.currentOperand = " "
    this.previousOperand = " "
    this.operator = undefined
    }
    delete() {
    
    }
    appendNumber(number) {
    this.currentOperand = number
    }
    chooseOperator(operator) {
    
    }
    compute() {
    
    }
    updateDisplay() {
    this.currentOperandTextElement = this.currentOperand
    }

const numberButtons = document.querySelectorAll("[number]")
const operatorButtons = document.querySelectorAll("[operator]")
const clearButton = document.querySelector("[clear]")
const deleteButton = document.querySelector("[delete]")
const equalButton = document.querySelector("[equal]")
const previousOperandTextElement = document.querySelector("[previous-operand]")
const currentOperandTextElement = document.querySelector("[current-operand]")

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
calculator.appendNumber(button.innerText)
calculator.updateDisplay()
    })
})