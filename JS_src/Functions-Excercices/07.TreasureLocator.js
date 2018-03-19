function locateTreasuse(coordinatesOfTreasures) {

    let islands = [];

    for (let index = 0; index < coordinatesOfTreasures.length; index += 2) {

        let x = coordinatesOfTreasures[index];
        let y = coordinatesOfTreasures[index + 1];

        if ((x >= 8 && x <= 9) && (y >= 0 && y <= 1)) {
            islands.push('Tokelau');
        } else if ((x >= 1 && x <= 3) && (y >= 1 && y <= 3)) {
            islands.push('Tuvalu');
        } else if ((x >= 5 && x <= 7) && (y >= 3 && y <= 6)) {
            islands.push('Samoa');
        } else if ((x >= 0 && x <= 2) && (y >= 6 && y <= 8)) {
            islands.push('Tonga');
        } else if ((x >= 4 && x <= 9) && (y >= 7 && y <= 8)) {
            islands.push('Cook');
        } else {
            islands.push('On the bottom of the ocean');
        }
    }

    islands.forEach(element => {
        console.log(element);
    });
}