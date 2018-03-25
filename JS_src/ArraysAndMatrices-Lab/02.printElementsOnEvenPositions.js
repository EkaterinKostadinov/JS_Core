function sumElements(arr) {

    let elements = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            elements.push(arr[i])
        }
    }

    console.log(elements.join(' '));

}