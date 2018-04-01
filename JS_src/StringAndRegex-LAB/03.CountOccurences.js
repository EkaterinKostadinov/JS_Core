function countOccurences(word, str) {
    let counter = 0;
    let index = str.indexOf(word);

    while (index != -1) {
        counter++;
        str = str.substr(index + 1)
        index = str.indexOf(word);
    }
    console.log(counter);
}