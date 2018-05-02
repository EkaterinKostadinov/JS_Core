function sum() {
    let tags = document.getElementsByTagName('td')
    let result = 0;
    for (let i = 0; i < tags.length; i++) {
        if (i % 2 == 1) {
            result += Number(tags[i].textContent);
        }
    }
    document.getElementById('sum').textContent = result;
    console.log(result);
}