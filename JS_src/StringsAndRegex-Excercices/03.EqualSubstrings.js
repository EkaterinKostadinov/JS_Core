function solve(mainStr, str) {

    let substr = mainStr.substr(0, str.length);
    if (substr == str) {
        console.log(true);
    } else {
        console.log(false);
    }

}