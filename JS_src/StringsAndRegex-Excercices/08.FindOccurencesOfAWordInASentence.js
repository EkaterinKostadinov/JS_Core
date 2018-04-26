function countOccurences(str, word) {
    const pattern = new RegExp("\\b" + word + "\\b", "gi");
    let occurences = pattern.exec(str);
    let counter = 0;
    console.log(occurences[1]);
    console.log(occurences[0]);

    while (occurences) {
        counter++;
        occurences = pattern.exec(str);
    }
    console.log(counter);
}

// function main(sentence, word) {
//     word = `\\b` + word + `\\b`;
//     let reg = new RegExp(word, 'gi');
//     let counter = 0;
//     let match = reg.exec(sentence);

//     while (match) {
//         counter++;
//         match = reg.exec(sentence);
//     }

//     console.log(counter);
// }