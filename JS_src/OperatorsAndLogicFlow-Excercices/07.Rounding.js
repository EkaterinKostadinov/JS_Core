function precisionRound(numbers) {
    var factor = Math.pow(10, numbers[1]);
    return Math.round(numbers[0] * factor) / factor;
}


let result = precisionRound([1.2133, 2]);
console.log(result);