function matchWords(str) {
    let pattern = /\w+/g;
    let matchedWords = str.match(pattern);

    console.log(matchedWords.join('|'));
}