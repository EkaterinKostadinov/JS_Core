function result() {
    let num1 = 0;
    let num2 = 1;
    let fibNumber = 0;
    return function count() {
        fibNumber = num1 + num2;
        num1 = num2;
        num2 = fibNumber;
        return num1;
    }
    
};