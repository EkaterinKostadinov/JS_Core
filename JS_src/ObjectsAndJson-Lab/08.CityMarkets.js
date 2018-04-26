function salesOfProducts(citiesAndGoods) {
    let myMap = new Map();
    for (const data of citiesAndGoods) {
        let splitted = data.split(/[->:]+/g).map(x => x.trim());
        let nameOfCity = splitted[0];
        let product = splitted[1];
        let amountOfSales = splitted[2];
        let priceOfoneUnit = splitted[3];
        if (myMap.has(nameOfCity)) {
            if (myMap.get(nameOfCity).has(product)) {
                myMap.get(nameOfCity).set(product, myMap.get(nameOfCity).get(product) + Number(amountOfSales) * Number(priceOfoneUnit))
            } else {
                myMap.get(nameOfCity).set(product, Number(amountOfSales) * Number(priceOfoneUnit))
            }
        } else {
            let nestedMap = new Map();
            nestedMap.set(product, Number(amountOfSales) * Number(priceOfoneUnit))
            myMap.set(nameOfCity, nestedMap);
        }
    }
    let keys = Array.from(myMap.keys());

    for (const key of keys) {
        console.log(`Town - ${key}`);

        for (const [keyProduct, value] of myMap.get(key)) {
            console.log(`$$$${keyProduct} : ${value}`);
        }
    }
}

// salesOfProducts('Sofia -> Laptops HP -> 200 : 2000',
//     'Sofia -> Raspberry -> 200000 : 1500',
//     'Sofia -> Audi Q7 -> 200 : 100000',
//     'Montana -> Portokals -> 200000 : 1',
//     'Montana -> Qgodas -> 20000 : 0.2',
//     'Montana -> Chereshas -> 1000 : 0.3'
// );