function solve(mainStr, str) {

    let startIndex = mainStr.length - str.length;
    let substr = mainStr.substr(startIndex);
    if (str == substr) {
        console.log(true);
    } else {
        console.log(false);
    }
}