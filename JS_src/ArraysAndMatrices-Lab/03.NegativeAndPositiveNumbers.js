function solve(numbers) {

    let ordered = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            ordered.push(numbers[i]);
        } else {
            ordered.unshift(numbers[i]);
        }
    }

    ordered.forEach(element => {
        console.log(element);
    });
}