function sortArrByCriteria( arr ) {
    return arr.sort( ( a, b ) => a >= b ).sort( ( a, b ) => a.length - b.length ).join( '\n' ) //YIS!
}
console.log( sortArrByCriteria( [ 'alpha', 'beta', 'gamma' ] ) );
console.log( sortArrByCriteria( [ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ] ) );
console.log( sortArrByCriteria( [ 'test', 'Deny', 'omen', 'Default' ] ) );