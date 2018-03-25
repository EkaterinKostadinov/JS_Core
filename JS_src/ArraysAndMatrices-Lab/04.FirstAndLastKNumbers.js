function solve(arr) {

    let kNumbers = [];

    for (let i = 1; i <= arr[0]; i++) {
        kNumbers.push(arr[i]);
    }

    console.log(kNumbers.join(' '));
    kNumbers.length = 0;

    for (let i = 1; i <= arr[0]; i++) {
        kNumbers.push(arr[arr.length - arr[0] - 1 + i]);
    }

    console.log(kNumbers.join(' '));

}