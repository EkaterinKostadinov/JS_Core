function printStars(numberOfStars) {
    for (let index = 1; index <= numberOfStars; index++) {
        console.log("*".repeat(index));
    }
    for (let index = numberOfStars - 1; index >= 0; index--) {
        console.log("*".repeat(index));
    }
}