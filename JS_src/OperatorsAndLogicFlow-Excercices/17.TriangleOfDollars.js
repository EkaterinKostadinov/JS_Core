function printTriangleOfDollars(number) {

    let dollar = '';
    for (let i = 0; i < number; i++) {

        for (let j = 0; j <= i; j++) {
            dollar += '$';

        }
        console.log(dollar);
        dollar = '';
    }
}