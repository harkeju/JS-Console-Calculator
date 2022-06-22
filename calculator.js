alert("Welcome to JavaScript Console Calculator. Click 'Close' to continue");
let num1 = parseInt(prompt("Enter a number"));
let operator = prompt("Choose an operator eg: + - * / % **: ");
let num2 = parseInt(prompt("Enter a second number"));

if (operator == "+") {
  console.log(num1 + num2);
} else if (operator == "-") {
  console.log(num1 - num2);
} else if (operator == "*") {
  console.log(num1 * num2);
} else if (operator == "/") {
  console.log(num1 / num2);
} else if (operator == "%") {
  console.log(num1 % num2);
} else if (operator == "**") {
  console.log(num1 ** num2);
} else {
  console.log("You've entered an invalid number or operator!");
}
