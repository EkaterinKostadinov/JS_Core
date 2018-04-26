function incomeOfCities(citiesAndIncome) {
    let obj = {};
    for (let i = 0; i < citiesAndIncome.length; i++) {
        if (i % 2 == 0) {
            if (!obj.hasOwnProperty(citiesAndIncome[i])) {
                obj[citiesAndIncome[i]] = 0;
            }
        } else {
            obj[citiesAndIncome[i - 1]] += Number([citiesAndIncome[i]]);
        }
    }
    console.log(JSON.stringify(obj));
}

//countWords([ 'Far too slow, you\'re far too slow.' ])