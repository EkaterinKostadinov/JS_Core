function printDiagonalSums(matrix) {

    let mainDiagonalSum = 0;
    let secondaryArraySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryArraySum += matrix[i][matrix.length - 1 - i];
    }
    console.log(`${mainDiagonalSum} ${secondaryArraySum}`);
}