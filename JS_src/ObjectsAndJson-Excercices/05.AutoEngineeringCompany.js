function printModelAndCars(brandAndCar) {
    let brands = new Map();

    for (const car of brandAndCar) {
        let [brand, model, numberOfProduction] = car.split(' | ');
        if (!brands.has(brand)) {
            brands.set(brand, new Map())
            brands.get(brand).set(model, numberOfProduction)
        } else if (brands.get(brand).has(model)) {
            brands.get(brand).set(model, Number(brands.get(brand).get(model)) + Number(numberOfProduction))
        } else {
            brands.get(brand).set(model, Number(numberOfProduction))
        }
    }

    for (const brand of brands) {
        console.log(brand[0]);
        for (const [model, quantity] of brands.get(brand[0])) {
            console.log("###" + model + ' -> ' + quantity);
        }
    }
}

// printModelAndCars([ 'Mercedes-Benz | 50PS | 123',
// 'Mini | Clubman | 20000',
// 'Mini | Convertible | 1000',
// 'Mercedes-Benz | 60PS | 3000',
// 'Hyunday | Elantra GT | 20000',
// 'Mini | Countryman | 100',
// 'Mercedes-Benz | W210 | 100',
// 'Mini | Clubman | 1000',
// 'Mercedes-Benz | W163 | 200' ])