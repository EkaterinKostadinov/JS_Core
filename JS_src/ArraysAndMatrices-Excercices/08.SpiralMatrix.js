function spiralMatrix(rows, columns) {


    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = new Array;
        for (let col = 0; col < columns; col++) {
            matrix[row][col] = 0;
        }
    }

    let maxNumber = rows * columns;
    let counter = 1;

    let row = -1;
    let col = -1;

    while (counter <= rows * columns) {
        col++;
        row++;

        while (col < columns && matrix[row][col] === 0) {
            matrix[row][col] = counter;
            col++;
            counter++;
        }
        row++;
        col--;

        while (row < rows && matrix[row][col] === 0) {
            matrix[row][col] = counter;
            row++;
            counter++;
        }
        col--;
        row--;


        while (col >= 0 && matrix[row][col] === 0) {
            matrix[row][col] = counter;
            col--;
            counter++;
        }
        col++;
        row--;


        while (row >= 0 && matrix[row][col] === 0) {
            matrix[row][col] = counter;
            row--;
            counter++;
        }

    }
    row = '';
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}