function orderCatalogueOfProducts(products) {
    let obj = {};

    for (const str of products) {
        let splitted = str.split(' : ').join(': ')
        if (!obj.hasOwnProperty(str[0])) {
            obj[str[0]] = [];
        }

        if (obj.hasOwnProperty(str[0])) {
            obj[str[0]].push(splitted)
        }
    }
    let objKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (const key of objKeys) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
            let sortedArr = obj[key].sort();
            for (let i = 0; i < obj[key].length; i++) {
                console.log("  " + obj[key][i]);
            }
        }
    }
}

// orderCatalogueOfProducts([ 'Appricot : 20.4',
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10' ]
// )