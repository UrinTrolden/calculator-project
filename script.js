const numbtns = document.querySelectorAll(".number");
const operandbtns = document.querySelectorAll(".operand")
const displayData = document.querySelector(".displaydata");
const clearetcs = document.querySelectorAll(".clearetcs");


let screenDisplay = [];
let screenValue = 0;
let decimalCheck = 0;
let operandType = "";
let initNum = 0;
let nextNum = 0;
let initNumCounter = 0;



function operate(operator, num1, num2) {
    if (operator == "addition") {
        return (parseFloat(num1) + parseFloat(num2)).toFixed(2);
    } else if (operator == "subtraction") {
        return (parseFloat(num1) - parseFloat(num2)).toFixed(2);
    } else if (operator == "equals") {
        return num2;
    } else if (operator == "division") {
        return (parseFloat(num1) / parseFloat(num2)).toFixed(2);
    } else if (operator == "multiplication") {
        return (parseFloat(num1) * parseFloat(num2)).toFixed(2);
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
            
        }
        screenDisplay.push(btn.id);
        displayData.textContent = screenDisplay.join("");
        screenValue = screenDisplay.join("");
    })
});

operandbtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.id) 
        if (initNumCounter == 0) {
            initNum = screenValue;
            initNumCounter++;
            operandType = btn.id;
            screenValue = 0;
            decimalCheck = 0;
        } else {
            nextNum = screenValue;
            screenValue = operate(operandType, initNum, nextNum);
            displayData.textContent = screenValue;
            initNum = screenValue;
            screenDisplay = [];
            operandType = btn.id;
            decimalCheck = 0;
        }
        
    })
});

clearetcs.forEach((btn) => {
     btn.addEventListener('click', () => {
        console.log(btn.id) 
        if (btn.id === "cleardisplay") {
             initNum = 0;
             nextNum = 0;
             screenValue = 0;
             screenDisplay = [];
             displayData.textContent = 0;
         } else return;
     })
})