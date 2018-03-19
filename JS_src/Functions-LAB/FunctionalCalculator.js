function calculator(number1, number2, operand) {

    function add(number1, number2) { return number1 + number2 }

    function substract(number1, number2) { return number1 - number2 }

    function divide(number1, number2) { return number1 / number2 }

    function multiply(number1, number2) { return number1 * number2 }

    switch (operand) {
        case '+':
            return add(number1, number2);
        case '-':
            return substract(number1, number2);
        case '/':
            return divide(number1, number2);
        case '*':
            return multiply(number1, number2);
    }

    console.log(calculator(2, 3, '+'));
}