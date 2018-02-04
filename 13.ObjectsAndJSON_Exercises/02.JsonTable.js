function jsonTable(jsonObj) {
    let output = `<table>\n`;

    for (obj in jsonObj) {
        let value = JSON.parse(jsonObj[obj]);
        output += `    <tr>
        <td>${value['name']}</td>
        <td>${value['position']}</td>
        <td>${value['salary']}</td>
    <tr>\n`
    }
    return output + `</table>`
}

console.log(jsonTable(
    [
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ]));