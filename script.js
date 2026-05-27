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

function operate (num1, operator, num2) {
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


function firstNumber () {

    const oldNumber = document.querySelector('p');
    
    const numberBtn = document.querySelectorAll(".numberButtons").forEach(btn => {
        btn.addEventListener("click" , (event) => {
            number1+=event.target.innerText  // FIX: allows multiple digits to be stored in a variable/displayed with string concat
            //gets the text number of the button | OR USE: .value (gets the value of the buttons)
            
            oldNumber.innerText = number1  //DISPLAY: should reflect the value of number variable not the value of button!

        })

    })
}
firstNumber();

function operateNumber () {

    const oldNumber = document.querySelector('p');
    
    const numberBtn = document.querySelectorAll(".operatorBtn").forEach(btn => {
        btn.addEventListener("click" , (event) => {
            operator=event.target.innerText  //no concat!
            
             //DISPLAY: should reflect the value of number variable concated with the operator
            oldNumber.innerText = (number1 += operator) 
        })

    })
}
operateNumber();


