function sumOfDiagonals(matrix) {

    let parsedMatrix = matrix.map(str => str.split(' ')).map(str => str.map(number => Number(number)));

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    //summingDiagonals
    for (let index = 0; index < matrix.length; index++) {
        mainDiagonal += parsedMatrix[index][index];
        secondaryDiagonal += parsedMatrix[index][parsedMatrix.length - 1 - index];
    }

    if (mainDiagonal !== secondaryDiagonal) {
        parsedMatrix.forEach(element => {
            console.log(element.join(' '));
        });
        return;
    } else {
        for (let row = 0; row < parsedMatrix.length; row++) {
            for (column = 0; column < parsedMatrix[row].length; column++) {
                if (row !== column && column !== parsedMatrix[column].length - 1 - row) {
                    parsedMatrix[row][column] = mainDiagonal;
                }
            }
        }
    }
    parsedMatrix.forEach(element => {
        console.log(element.join(' '));
    });
}