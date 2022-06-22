operator = prompt("What operation between +,-,*,/")
num1 = prompt("What is your first number?")
num2 = prompt("What is your second number?")



var num1 = Math.floor(num1)
var num2 = Math.floor(num2)
if (operator == "+") {
    console.log(num1 + num2)
}
if (operator == "-") {
    console.log(num1 - num2)
}
if (operator == "*") {
    console.log(num1 * num2)
}
if (operator == "/") {
    console.log(num1 / num2)
}

else {
    console.log("Invalid input")
}

