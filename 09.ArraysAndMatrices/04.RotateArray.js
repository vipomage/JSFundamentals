function rotateArray( arr ) {
    let output = [];

    for ( let i = 0; i < arr.length - 1; i++ ) {
        output[ i ] = arr[ i ]
    }

    let rotations = Number( arr[ arr.length - 1 ] % 10 );

    for ( let i = 0; i < rotations; i++ ) {
        let lastElmnt = output[ output.length - 1 ];
        for ( let j = output.length - 1; j > 0; j-- ) {
            output[ j ] = output[ j - 1 ]
        }
        output[ 0 ] = lastElmnt;
    }

    return output.join( ' ' )
}

console.log( rotateArray( [ '1', '2', '3', '4', '2' ] ) );
console.log( rotateArray( [ 'Banana', 'Orange', 'Coconut', 'Apple', '15' ] ) );