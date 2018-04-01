function splitByRegex(str) {
    const pattern = /[(),;.\s]+/;

    let splitted = str.split(pattern);
    splitted = splitted.filter(x => x !== '');
    console.log(splitted.join('\n'));
}