function printBiggestNumber(matrix) {

    let biggestNumber = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < matrix.length; i++) {

        let number = matrix[i].sort((a, b) => a < b).shift();

        if (biggestNumber < number) {
            biggestNumber = number;
        }
    }
    if (biggestNumber !== Number.MIN_VALUE) {
        console.log(biggestNumber)
    }
}


// function printBiggestNumber(matrix) {

//     let number = matrix.map(arr => arr.sort((a, b) => a < b)[0]).sort((a, b) => a < b)[0];

//     console.log(number);
// }