function oddOrEven(number) {
    number = Math.abs(number);
    let a = 5;
    if (number % 2 == 0) {
        console.log('even');
    } else if (number % 2 == 1) {
        console.log('odd');
    } else if (number % 2 != Math.round(number % 2)) {
        console.log('invalid');
    }

}