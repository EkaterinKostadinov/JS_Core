function checkingSpeed(speedAndZone) {

    let speed = speedAndZone[0];
    let zone = speedAndZone[1];
    let getAllowedSpeed = 0;
    if (zone == 'residential') {
        getAllowedSpeed = 20;
        if (speed > getAllowedSpeed) {
            speed -= getAllowedSpeed;
            if (speed <= 0) {
                console.log('');
            } else if (speed <= 20) {
                console.log('speeding');
            } else if (speed > 20 && speed <= 40) {
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    } else if (zone == 'city') {
        getAllowedSpeed = 50;
        if (speed > getAllowedSpeed) {
            speed -= getAllowedSpeed;
            if (speed <= 0) {
                console.log('');
            } else if (speed <= 20) {
                console.log('speeding');
            } else if (speed > 20 && speed <= 40) {
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    } else if (zone == 'interstate') {
        getAllowedSpeed = 90;
        if (speed > getAllowedSpeed) {
            speed -= getAllowedSpeed;
            if (speed <= 0) {
                console.log('');
            } else if (speed <= 20) {
                console.log('speeding');
            } else if (speed > 20 && speed <= 40) {
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    } else if (zone == 'motorway') {
        getAllowedSpeed = 130;
        if (speed > getAllowedSpeed) {
            speed -= getAllowedSpeed;
            if (speed <= 0) {
                console.log('');
            } else if (speed <= 20) {
                console.log('speeding');
            } else if (speed > 20 && speed <= 40) {
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    }
}