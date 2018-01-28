function multiTable( size ) {
    let output = '<table border="1">\n';

    for ( let i = 0; i <= size; i++ ) {
        if ( i !== 0 ) {
            output += `<th>${i}</th>`;
        } else {
            output += "  <tr><th>x</th>";
        }
    }
    output += "</tr>\n";

    for ( let row = 1; row <= size; row++ ) {
        output += `  <tr><th>${row}</th>`;
        for ( let col = 1; col <= size; col++ ) {
            output += `<td>${row * col}</td>`;
        }
        output += "</tr>\n";
    }
    output += "</table>\n";

    return output
}


console.log( multiTable( 5 ) );