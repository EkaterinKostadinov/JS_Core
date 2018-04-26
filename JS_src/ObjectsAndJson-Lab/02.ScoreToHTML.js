function solve(jsonString) {

    let arr = JSON.parse(jsonString);
    let thKeys = Object.keys(arr[0]);

    let table = '<table>\n';
    table += `\t<tr><th>${thKeys[0]}</th><th>${thKeys[1]}</th></tr>\n`;
    for (const obj of arr) {

        table += `\t<tr><td>${htmlEscape(obj.name)}</td><td>${obj.score}</td></tr>\n`;
    }
    table += '</table>';
    console.log(table);

    function htmlEscape(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}


//solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')