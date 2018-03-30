function name(arr) {

    let sortedArr = arr.filter(a => a.toLowerCase()).sort().sort((a, b) => a.length - b.length);
    console.log(sortedArr.join('\n'));

}