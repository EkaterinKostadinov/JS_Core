function findEqualNeighboursInMatrix(martix) {

    let counterOfNeighbours = 0;

    for (let row = 0; row < martix.length; row++) {
        for (let col = 0; col < martix[row].length; col++) {

            if (row < martix.length - 1 && col < martix[row].length - 1) {
                if (martix[row][col] === martix[row][col + 1]) {
                    counterOfNeighbours++
                }
                if (martix[row][col] === martix[row + 1][col]) {
                    counterOfNeighbours++;
                }
            }
            if (row < martix.length - 1 && col === martix[row].length - 1) {
                if (martix[row][col] === martix[row + 1][col]) {
                    counterOfNeighbours++;
                }
            }
            if (row === martix.length - 1 && col < martix[row].length - 1) {
                if (martix[row][col] === martix[row][col + 1]) {
                    counterOfNeighbours++
                }
            }
        }
    }

    console.log(counterOfNeighbours);
}