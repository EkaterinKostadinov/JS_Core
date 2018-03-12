function calcDistanceIn3D(coordinates) {
    let x = Math.pow((coordinates[3] - coordinates[0]), 2);
    let y = Math.pow((coordinates[4] - coordinates[1]), 2);
    let z = Math.pow((coordinates[5] - coordinates[2]), 2);
    let distance = x + y + z;
    console.log(Math.sqrt(distance));
}