function extractText(text) {
    let result = [];

    while (true) {
        let firstIndex = text.indexOf('(');
        let secondIndex = text.indexOf(')');
        if (firstIndex === -1 || secondIndex === -1 || secondIndex < firstIndex) {
            break;
        }

        let str = text.substring(firstIndex + 1, secondIndex);
        result.push(str);

        text = text.substring(secondIndex + 1);
    }

    console.log(result.join(', '));
}