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


// REQUIRE FIX: ALLOWS MULTIPLE DIGITS TO BE STORED IN THE VARIABLE/DISPLAYED!!
function clickedButton () {

    const oldNumber = document.querySelector('p');
    
    const numberBtn = document.querySelectorAll(".numberButtons").forEach(btn => {
        btn.addEventListener("click" , (event) => {
            number1=event.target.innerText //gets the text number of the button | OR USE: .value (gets the value of the buttons)
            
            //DISPLAY: should reflect the value of number variable not the value of button!
            oldNumber.innerText = number1 //updates the display to the value of a number button

            console.log(number1)})

    })
}


clickedButton();
