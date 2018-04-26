function capitalize(str) {
    let capitalizeAllWords = str.toLowerCase().split(/\s+/);

    let arr = [];
    for (const word of capitalizeAllWords) {
        let upperCaseFirstLetter = word.split('');
        let firstLetter = word.split('')[0].toUpperCase();
        upperCaseFirstLetter[0] = firstLetter;
        arr.push(upperCaseFirstLetter.join(''));
    }

    console.log(arr.join(' '));
}