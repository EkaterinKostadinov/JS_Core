function takeNumbers(text) {
    let numbers = text.join(' ').match(/\d+/g);
    console.log(numbers.join(' '));
}