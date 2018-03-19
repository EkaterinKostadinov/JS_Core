function solve(points) {

    let x1 = points[0];
    let y1 = points[1];
    let x2 = points[2];
    let y2 = points[3];

    if (Math.sqrt(Math.pow((x1), 2) + Math.pow((y1), 2)) == Math.round(Math.sqrt(Math.pow((x1), 2) + Math.pow((y1), 2)))) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    if (Math.sqrt(Math.pow((x2), 2) + Math.pow((y2), 2)) == Math.round(Math.sqrt(Math.pow((x2), 2) + Math.pow((y2), 2)))) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    if (Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) == Math.round(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}