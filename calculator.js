alert("Welcome to JavaScript Console Calculator. Click 'Close' to continue");
let num1 = parseInt(prompt("Enter a number"));
let operator = prompt("Choose an operator eg: + - * / % **: ");
let num2 = parseInt(prompt("Enter a second number"));

if (operator == "+") {
  alert(`The answer is ${num1 + num2}`);
} else if (operator == "-") {
  alert(`The answer is ${num1 - num2}`);
} else if (operator == "*") {
  alert(`The answer is ${num1 * num2}`);
} else if (operator == "/") {
  alert(`The answer is ${num1 / num2}`);
} else if (operator == "%") {
  alert(`The answer is ${num1 % num2}`);
} else if (operator == "**") {
  alert(`The answer is ${num1 ** num2}`);
} else {
  alert(
    "You've entered an invalid number or operator! Refresh this page to restart"
  );
}
