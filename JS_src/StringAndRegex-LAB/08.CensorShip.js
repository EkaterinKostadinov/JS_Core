function printCensoredText(text, forbiddenWords) {
    for (const word of forbiddenWords) {

        let regex = new RegExp(word, 'g');
        let dash = '-'
        let dashes = dash.repeat(word.length);

        text = text.replace(regex, dashes)
    }
    console.log(text);
}