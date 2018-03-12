function CalcArea(a, b, c) {
    let subPerimeter = (a + b + c) / 2;

    return Math.sqrt((subPerimeter * (subPerimeter - a) * (subPerimeter - b) * (subPerimeter - c)));
}