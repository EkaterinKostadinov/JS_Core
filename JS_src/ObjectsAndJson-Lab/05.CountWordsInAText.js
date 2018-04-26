function countWords(text) {
    let words = text.join(' ').match(/[\w\d]+/g);
    let obj = {};
    for (let i = 0; i < words.length; i++) {
        if (obj.hasOwnProperty(words[i])) {
            obj[words[i]]++;
        } else {
            obj[words[i]] = 1;
        }
    }
    console.log(JSON.stringify(obj));
}