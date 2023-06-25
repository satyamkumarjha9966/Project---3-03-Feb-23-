let num1 = 15;
let num2 = 10;

let operator = "*";

switch (operator) {
    case "+":
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;

    case "-":
        result = num1 - num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;

    case "*":
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    
    case "/":
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;

    default:
        console.log("Invalid operator");
        break;
}