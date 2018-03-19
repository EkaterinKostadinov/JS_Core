function averageSum(number) {

    let numberOfDigits = number.toString().length;
    let sum = number.toString().split('').map(x => Number(x)).reduce((a, b) => a + b);
    if (sum / numberOfDigits > 5) {
        return number;
    } else {
        while (sum / numberOfDigits <= 5) {
            number = number.toString() + '9';
            numberOfDigits = number.length;
            sum = number.toString().split('').map(x => Number(x)).reduce((a, b) => a + b);
        }
    }
    return number;
}

averageSum(1234)