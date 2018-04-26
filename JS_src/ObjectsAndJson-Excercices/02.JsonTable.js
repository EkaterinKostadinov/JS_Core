function jsonObjectsToHtmlTable(employees) {
    let obj = {};
    let table = '<table>\n'
    for (const employee of employees) {
        table += '\t<tr>\n'
        let parsed = JSON.parse(employee);

        table += `\t\t<td>${parsed.name}</td>\n`
        table += `\t\t<td>${parsed.position}</td>\n`
        table += `\t\t<td>${parsed.salary}</td>\n`

        table += '\t<tr>\n'
    }
    table += '</table>'
    console.log(table);
}

// jsonObjectsToHtmlTable([ '{"name":"Pesho","position":"Promenliva","salary":100000}',
// '{"name":"Teo","position":"Lecturer","salary":1000}',
// '{"name":"Georgi","position":"Lecturer","salary":1000}' ])