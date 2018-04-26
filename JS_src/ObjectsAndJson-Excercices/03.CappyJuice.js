function calculateBottlesOfJuice(juices) {
    let myMap = new Map();
    let orderedMap = new Map();

    for (const juice of juices) {
        let data = juice.split(' => ');
        if (!myMap.has(data[0])) {
            myMap.set(data[0], Number(data[1]));
            if (myMap.get(data[0]) >= 1000) {
                orderedMap.set(data[0], Number(myMap.get(data[0])));
            }
        } else {
            myMap.set(data[0], myMap.get(data[0]) + Number(data[1]));
            if (myMap.get(data[0]) >= 1000) {
                orderedMap.set(data[0], Number(myMap.get(data[0])));
            }
        }
    }

    for (const juice of orderedMap) {
        if (juice[1] >= 1000) {
            let bottles = Math.floor(juice[1] / 1000);
            console.log(juice[0] + " => " + bottles);
        }
    }
}

// calculateBottlesOfJuice([ 'Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549' ])