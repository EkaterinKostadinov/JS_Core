function processNumbersOnOddPositions(numbers) {

    let numbersAtOddPositions = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 == 1) {
            numbersAtOddPositions.push(numbers[i]);
        }
    }

    numbersAtOddPositions = numbersAtOddPositions.map(x => x * 2).reverse();
    console.log(numbersAtOddPositions.join(' '));
}