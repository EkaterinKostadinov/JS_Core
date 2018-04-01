function aggregate(table) {
    let strs = table.join(' ').split('|').filter(x => x != '').map(x => x.trim());
    let cities = [];
    let income = 0;

    for (let i = 0; i < strs.length; i++) {
        if (i % 2 == 0) {
            cities.push(strs[i]);
        } else {
            income += Number(strs[i]);
        }
    }
    console.log(cities.join(', '));
    console.log(income);
}