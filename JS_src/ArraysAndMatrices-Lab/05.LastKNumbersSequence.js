function printSequenceOfelements(n, k) {

    let arr = [1];
    let sumOfElements = 0;

    while (arr.length !== n) {

        if (arr.length < k) {
            for (let i = 0; i < arr.length; i++) {
                sumOfElements += arr[i];
            }
            arr.push(sumOfElements);
            sumOfElements = 0;
        } else {
            for (let j = 0; j < k; j++) {
                sumOfElements += arr[arr.length - k + j];
            }
            arr.push(sumOfElements);
            sumOfElements = 0;
        }
    }

    console.log(arr.join(' '));
}