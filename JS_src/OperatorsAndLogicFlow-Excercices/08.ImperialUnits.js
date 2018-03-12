function calcFeets(inches) {
    if (inches < 12) {
        return console.log(`0'-${inches}"`);
    } else {
        let feets = inches / 12;
        feets = Math.floor(feets);
        inches -= feets * 12;
        console.log(`${feets}'-${inches}"`);
    }
}