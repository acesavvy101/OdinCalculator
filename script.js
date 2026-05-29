function add (num1, num2) {
    return (+num1 + +num2); //add unary plus
}

function subtract (num1,num2) {
    return (num1) - (num2);
}

function multiply (num1,num2) {
    return (num1 * num2);
}

function divide (num1,num2) {
    return (num1/num2);
}

// variables to be updated:
let number1 =""
let number2 =""
let operator =""

let resultNumber=""
function operate (num1, operator, num2) {
    if (operator === "+"){
        resultNumber = (add(num1,num2)); //store in a variable to display ltr
    } else if (operator === "-") {
        resultNumber = (subtract(num1, num2));
    } else if (operator === "×") {
        resultNumber = (multiply(num1,num2));
    } else if (operator === "÷") {
        resultNumber = (divide(num1,num2));
    }
}

let firstInputNumber = true;
let justCounted = false;
function inputNumber () {

    const oldDisplay = document.querySelector('p');
    
    const numberBtn = document.querySelectorAll(".numberButtons").forEach(btn => {
        btn.addEventListener("click" , (event) => {
            if(justCounted===true) {
                number1=event.target.innerText //overwrite number1 input
                oldDisplay.innerText = number1  
                //assign and reset this so else if condition runs!
                firstInputNumber = true; 
                justCounted=false 

            } else if (firstInputNumber===true) { 
                number1+=event.target.innerText  // FIX: allows multiple digits to be stored in a variable/displayed with string concat +=
                //gets the text number of the button | OR USE: .value (gets the value of the buttons)
            
                oldDisplay.innerText = number1  //DISPLAY: should reflect the value of number variable not the value of button!
            
            } else  {
                number2+=event.target.innerText 

                //DISPLAY: should reflect the value of number variable concated with the operator, NOT REASSIGN WITH +=
                oldDisplay.innerText = (number1 + operator + number2);
            }
        })
    })
}
inputNumber();

function inputOperator () {

    const oldDisplay = document.querySelector('p');
    
    const numberBtn = document.querySelectorAll(".operatorBtn").forEach(btn => {
        btn.addEventListener("click" , (event) => {
            if (number1 && operator && number2) { //the variables contain value, so its truthy | CONDITION= if (true)
                operate(number1, operator, number2)
                number1 = resultNumber; 
                number2 ="";
            } else {
               firstInputNumber = false; //when this runs, the else from inputNumber() will run
            }
            operator=event.target.innerText; //`runs on every click and must not overwrite operator before the condition is evaluated`
            oldDisplay.innerText = (number1 + operator)  
        })
    })
}
inputOperator();


function count () {
    const oldDisplay = document.querySelector('p');

    const equalButton = document.getElementById("equalBtn")
    equalButton.addEventListener("click" ,() => {

        operate(number1, operator, number2)
        
        oldDisplay.innerText= resultNumber;
        //update the number1 with the result and clear the number2 and operator for the next input
        number1 = resultNumber; 
        number2 ="";
        operator ="" ;
        firstInputNumber=true; //make this true again so the input goes to number1
        justCounted = true;
    })
}

count()

function clear () {
    const oldDisplay = document.querySelector('p');

    const clearButton = document.getElementById("clearBtn")
    clearButton.addEventListener("click", () => {
        firstInputNumber=true;//make this true again so the input goes to number1
        oldDisplay.innerText = "";
        number1 = "";
        number2 ="";
        operator ="" ;
    })
}

clear()

/*
function ignoreFloat () {
    //check if current input already has "." if yes, ignore/prevent. 
    //current input: what button is clicked/what is displayed
    const ignoreDot = document.getElementById("floatBtn");

    if (number1.includes(".")) {
        ignoreDot.disabled = true;
    }
}

ignoreFloat() */