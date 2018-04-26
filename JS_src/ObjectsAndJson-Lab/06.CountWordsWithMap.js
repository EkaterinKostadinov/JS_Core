function countWords(strArray) {
    let myMap = new Map();
    let words = strArray.join(' ').match(/[\w\d]+/g);
    words = words.map(x => x.toLowerCase());

    for (const word of words) {
        if (myMap.has(word)) {
            myMap.set(word, myMap.get(word) + 1)
        } else {
            myMap.set(word, 1)
        }
    }
    let sortedKeys = Array.from(myMap.keys()).sort((a, b) => a.localeCompare(b));
    for (const key of sortedKeys) {
        console.log(`'${key}' -> ${myMap.get(key)} times`);
    }
}