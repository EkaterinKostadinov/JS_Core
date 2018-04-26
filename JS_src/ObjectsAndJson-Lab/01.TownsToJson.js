function townsToJson(arr) {
    let props = arr[0].split('|').filter(x => x !== '').map(x => x.trim());
    let cities = [];
    for (const cityAndPositon of arr.slice(1)) {
        let values = cityAndPositon.split('|').filter(x => x !== '').map(x => x.trim());
        let obj = {};
        obj[props[0]] = values[0];
        obj[props[1]] = Number(values[1]);
        obj[props[2]] = Number(values[2]);
        cities.push(obj);
    }
    console.log(JSON.stringify(cities));
}