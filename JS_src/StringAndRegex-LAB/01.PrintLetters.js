function printLetters(str) {
    str[0] = 'asd';

    for (let index = 0; index < str.length; index++) {
        console.log(`str[${index}] -> ` + str[index]);
    }
}