function calculations(arr) {

    let number = arr[0];

    let operations = {
        'chop': (number) => number / 2,
        'dice': (number) => Math.sqrt(number),
        'spice': (number) => number + 1,
        'bake': (number) => number * 3,
        'fillet': (number) => number * 0.8
    };

    for (let index = 1; index < arr.length; index++) {
        let currentOperation = arr[index];
        number = operations[currentOperation](number);
        console.log(number);
    }
}