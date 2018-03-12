function isThePointInRectangle(coordinates) {
    let [x, y, xMin, xMax, yMin, yMax] = coordinates

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}