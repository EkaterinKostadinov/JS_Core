function jsonToHTMLTable(jsonString) {

    let arr = JSON.parse(jsonString);
    let thKeys = Object.keys(arr[0]);
    //headers Of Table
    let table = '<table>\n';
    table += '\t<tr>'
    for (const key of thKeys) {
        table += `<th>${htmlEscape(key)}</th>`
    }
    table += '</tr>\n';
    //

    // rows of table
    for (const obj of arr) {
        table += `\t<tr>`
        let values = Object.values(obj);
        for (const value of values) {
            table += `<td>${htmlEscape(value + '')}</td>`;
        }
        table += `</tr>\n`
    }
    //
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