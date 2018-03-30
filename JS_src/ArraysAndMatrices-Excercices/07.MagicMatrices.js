function findMatrixWithEqualSumOfRowsAndColumns(matrix) {

    let sumOfRow = 0;
    let sumOfColumn = 0;
    let sumOfRows = [];
    let sumOfColumns = [];

    for (let row = 0; row < matrix.length; row++) {
        //summing rows
        for (let column = 0; column < matrix[row].length; column++) {
            sumOfRow += matrix[row][column];
        }
        sumOfRows.push(sumOfRow);
        sumOfRow = 0;
        //summing columns
        for (let column = 0; column < matrix.length; column++) {
            sumOfColumn += matrix[column][row];
        }
        sumOfColumns.push(sumOfColumn);
        sumOfColumn = 0;
    }

    let areEqual = true;

    if (sumOfColumns.length > sumOfRows.length) {

        for (let i = 0; i < sumOfRows.length;) {
            for (let j = 0; j < sumOfColumns.length; j++) {
                if (sumOfRows[i] !== sumOfColumns[j]) {
                    areEqual = false;
                }
            }
        }
    } else {
        for (let i = 0; i < sumOfColumns.length; i++) {
            for (let j = 0; j < sumOfRows.length; j++) {
                if (sumOfRows[j] !== sumOfColumns[i]) {
                    areEqual = false;
                }
            }
        }
    }

    console.log(areEqual);
}