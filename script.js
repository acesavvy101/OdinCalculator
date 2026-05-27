function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1,num2) {
    return num1 - num2;
}

function multiply (num1,num2) {
    return (num1*num2);
}

function divide (num1,num2) {
    return num1/num2;
}

// variables to be updated:
let number1 =""
let number2 =""
let operator =""

function operate (operator, num1, num2) {
    if (operator === "+"){
       return (add(num1,num2));
    } else if (operator === "-") {
        return (subtract(num1, num2));
    } else if (operator === "*") {
        return (multiply(num1,num2));
    } else if (operator === "/") {
        return (divide(num1,num2));
    }
}

// update variable when buttons clicked, calc display should return the buttons clicked
// query selector all needs a for each loop
function clickedButton () {
    const numberBtn = document.querySelectorAll(".numberButtons").forEach(btn => {
        btn.addEventListener("click" , (event) => {
            number1=event.target.innerText //gets the text number of the buttons
           // OR USE: .value (gets the value of the buttons)
            console.log(number1)
        })
    })
    }

clickedButton();
