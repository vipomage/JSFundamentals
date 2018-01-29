function sumFndLast( arr ) {
    return Number( arr[ 0 ] ) + Number( arr[ arr.length - 1 ] );
}

console.log( sumFndLast( [ '20', '30', '40' ] ) );
console.log( sumFndLast( [ '5', '10' ] ) );