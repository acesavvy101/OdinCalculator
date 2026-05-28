function add (num1, num2) {
    return (num1 + num2);
}

function subtract (num1,num2) {
    return (num1) - (num2);
}

function multiply (num1,num2) {
    return (num1) * (num2);
}

function divide (num1,num2) {
    return (num1)/ (num2);
}

// variables to be updated:
let number1 =""
let number2 =""
let operator =""

function operate (num1, operator, num2) {
    if (operator === "+"){
        //return (add(num1,num2));
       console.log(add(num1,num2));
    } else if (operator === "-") {
        //return (subtract(num1, num2));
        console.log(subtract(num1, num2));
    } else if (operator === "*") {
        //return (multiply(num1,num2));
        console.log(multiply(num1,num2));
    } else if (operator === "/") {
        //return (divide(num1,num2));
        console.log(divide(num1,num2));
    }
}

let firstInputNumber = true;
function inputNumber () {

    const oldNumber = document.querySelector('p');
    
    const numberBtn = document.querySelectorAll(".numberButtons").forEach(btn => {
        btn.addEventListener("click" , (event) => {
            //AGAIN BRO THIS IS A COMPARISON!!!
            if (firstInputNumber===true) { 
                number1+=event.target.innerText  // FIX: allows multiple digits to be stored in a variable/displayed with string concat +=
                //gets the text number of the button | OR USE: .value (gets the value of the buttons)
            
                oldNumber.innerText = number1  //DISPLAY: should reflect the value of number variable not the value of button!
                console.log (number1)
            } else  {
                number2+=event.target.innerText 

                //DISPLAY: concat, NOT REASSIGN WITH +=
                oldNumber.innerText = (number1 + operator +number2 ) 
                console.log(number2)
            }



        })

    })
}
inputNumber();

function inputOperator () {

    const oldNumber = document.querySelector('p');
    
    const numberBtn = document.querySelectorAll(".operatorBtn").forEach(btn => {
        btn.addEventListener("click" , (event) => {
            operator=event.target.innerText  //no concat!
            
             //DISPLAY: should reflect the value of number variable concated with the operator, NOT REASSIGN WITH +=
            oldNumber.innerText = (number1 + operator) 
            firstInputNumber = false; //when this runs, the else from inputNumber() will run
            console.log (operator)
        })

    })
}
inputOperator();

function count () {
    const equalButton = document.getElementById("equalBtn")
    equalButton.addEventListener("click" ,() => {
        operate(number1, operator, number2)
        console.log("clicked")
    })
}

count()