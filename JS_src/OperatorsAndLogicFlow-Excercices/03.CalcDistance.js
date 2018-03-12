function calcDistance(n) {
    let distance = Math.abs((((n[0] * 1000) / 3600) * n[2]) - (((n[1] * 1000) / 3600)) * n[2]);
    distance = Math.floor(distance);
    console.log(distance);
}