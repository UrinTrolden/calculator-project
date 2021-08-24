const numbtns = document.querySelectorAll(".number");
const operandbtns = document.querySelectorAll(".operand")
const displayData = document.querySelector(".displaydata");



let screenDisplay = [];
let decimalCheck = 0;

let initNum = 0;
let nextNum = 0;

function addition(num) {
    if (!initNum) {
        initNum = num;
        displayData.textContent = initNum;
    } else {
        nextNum = num;
        displayData.textContent = nextNum;
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
        
        screenDisplay.push(btn.id);
        displayData.textContent = screenDisplay.join("");
    })
});

operandbtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert(btn.id)
    })
})