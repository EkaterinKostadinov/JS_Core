function findOddNumbers(number) {
    for (let index = 1; index <= number; index += 2) {
        if (index % 2 == 1) {
            console.log(index);
        }
    }
}