function registerPopulation(cityAndPopulation) {
    let obj = {};
    let data = cityAndPopulation.join(',').split(/[<>\-\,]+/).filter(x => x !== '').map(x => x.trim());

    for (let i = 0; i < data.length; i += 2) {
        if (obj.hasOwnProperty([data[i]])) {
            obj[data[i]] += Number(data[i + 1]);
        } else {
            obj[data[i]] = Number(data[i + 1]);
        }
    }

    let keys = Object.keys(obj)
    for (const key of keys) {
        console.log(`${key} : ${obj[key]}`);
    }
}