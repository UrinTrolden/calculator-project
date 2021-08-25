const numbtns = document.querySelectorAll(".number");
const operandbtns = document.querySelectorAll(".operand")
const displayData = document.querySelector(".displaydata");



let screenDisplay = [];
let screenValue = 0;
let decimalCheck = 0;
let operandType = "";
let initNum = 0;
let nextNum = 0;
let initNumCounter = 0;



function operate(operator, num1, num2) {
    if (operator == "addition") {
        return parseFloat(num1) + parseFloat(num2);
    }
}



numbtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id === ".") {
            if (decimalCheck >= 1) {
                return;
            }
            decimalCheck++
        } 
        if (initNumCounter == 1) {
            screenDisplay = [];
            initNumCounter++;
            displayData.textContent = screenDisplay.join("")
            console.log("ass")
        }
        screenDisplay.push(btn.id);
        displayData.textContent = screenDisplay.join("");
        screenValue = screenDisplay.join("");
    })
});

operandbtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (initNumCounter == 0) {
            initNum = screenValue;
            initNumCounter++;
            operandType = btn.id;
            screenValue = 0;
        } else {
            nextNum = screenValue;
            screenValue = operate(operandType, initNum, nextNum);
            displayData.textContent = screenValue;
            initNum = screenValue;
            screenDisplay = [];
        }
        
    })
})