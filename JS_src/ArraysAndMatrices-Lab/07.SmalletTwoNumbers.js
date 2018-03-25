function printSmallestTwoNumbers(arr) {

    let sorted = arr.sort((a, b) => a - b);

    for (let i = 0; i < 2; i++) {
        console.log(sorted.shift());
    }
}