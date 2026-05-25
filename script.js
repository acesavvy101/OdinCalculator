function add (num1, num2) {
    return num1 + num2;
}
console.log(add(1,2));

function subtract (num1,num2) {
    return num1 - num2;
}
console.log(subtract(4,9));

function multiply (num1,num2) {
    return (num1*num2);
}
console.log(multiply(6,3));

function divide (num1,num2) {
    return num1/num2;
}
console.log (divide(6,2));

let number1
let number2
let operator

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