function matchDates(arr) {
    const pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let str = arr.join(',');

    let matches = str.match(pattern);

    for (let i = 0; i < matches.length; i++) {
        let match = pattern.exec(matches)
        console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
    }
}