function constructEngine(carParts) {
    let modifiedCar = {};
    modifiedCar.model = carParts.model;
    let engine;
    if (carParts.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        }
    } else if (carParts.power > 90 && carParts.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    } else {
        engine = {
            power: 200,
            volume: 3500
        }
    }

    modifiedCar.engine = engine;

    modifiedCar.carriage = {
        type: carParts.carriage,
        color: carParts.color
    }

    let wheels;
    if (carParts.wheelsize % 2 === 0) {
        carParts.wheelsize--;
    }

    modifiedCar.wheels = [carParts.wheelsize, carParts.wheelsize, carParts.wheelsize, carParts.wheelsize];

    return modifiedCar;


}

console.log(constructEngine({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));