function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = 0;

    let operand = document.getElementsByClassName("operand")[0].value
    switch (operand) {
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
        case '*':
            result = Number(num1) * Number(num2);
            break;
        case '/':
            result = Number(num1) / Number(num2);
            break;
        case '^':
            result = Number(num1) ** Number(num2);
            break;
        case 'cos':
            result = Math.cos(Number(num1));
            break;
    }
    document.getElementById('sum').value = result;
}