function findBiggestNumber(numbers) {
    let number = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (number < numbers[i]) {
            number = numbers[i];
        }
    }
    console.log(number);

}