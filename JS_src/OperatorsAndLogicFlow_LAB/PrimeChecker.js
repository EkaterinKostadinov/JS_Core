function isPrime(number) {
    if (number < 0) {
        console.log('false');
       return;
    }if (number == 1 || number == 0) {
        console.log('false');
        return;
    }
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            console.log('false');
            return;
        }
    }
    console.log('true');
}