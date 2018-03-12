function convertGradToRadians(grads) {

    let degrees = 0.9;
    degrees *= grads;
    degrees %= 360;
    if (degrees < 0 || degrees > 360) {
        if (degrees < 0) {
            degrees += 360
        }
        if (degrees > 360) {
            degrees -= 360;
        }
    }
    return degrees;
}