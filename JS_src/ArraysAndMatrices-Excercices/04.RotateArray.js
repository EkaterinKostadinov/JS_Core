function rotateArray(arr) {

    let numberOfRotations = arr.pop();
    numberOfRotations = numberOfRotations % arr.length;

    for (let i = 0; i < numberOfRotations; i++) {
        let elementOfArray = arr.pop();
        arr.unshift(elementOfArray);
    }

    console.log(arr.join(' '));
}