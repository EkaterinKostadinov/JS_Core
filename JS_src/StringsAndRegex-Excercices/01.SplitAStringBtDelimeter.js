function splitByGivenDelimeter(str, delimeter) {
    let splitted = str.split(delimeter);
    splitted.forEach(element => {
        console.log(element);
    });
}