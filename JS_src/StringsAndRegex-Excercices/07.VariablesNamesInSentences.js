function findNamesWithUnderscore(str) {
    const pattern = /_([A-Za-z\d]+)/g;
    let matched = str.match(pattern);
    let removeUnderscore = matched.map(x => x.substring(1).trim());
    console.log(removeUnderscore.join(','));
}