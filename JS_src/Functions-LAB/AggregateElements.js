function aggregateElements(elements) {

    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(elements, initialvalue, func) {
        
        let value = initialvalue;
        for (let i = 0; i < elements.length; i++) {
            value = func(value, elements[i]);
        }
        console.log(value);
    }
}