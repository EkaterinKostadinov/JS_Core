window.onload = function substract() {
    let firstNumber = document.getElementById('firstNumber')
    firstNumber.disabled = false;
    let secondNumber = document.getElementById('secondNumber');
    secondNumber.disabled = false;
    let result = document.getElementById('result');
    
    let substaction = Number(firstNumber.value) - Number(secondNumber.value);
    result.innerHTML = substaction
}
