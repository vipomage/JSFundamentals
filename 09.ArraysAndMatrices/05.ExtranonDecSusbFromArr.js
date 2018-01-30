function subseqFromArr( arr ) {
    let output = [];
    let min = Number.MIN_SAFE_INTEGER;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] >= min ) {
            min = arr[ i ];
            output.push( arr[ i ] )
        }
    }
    return output.join( '\n' )
}

console.log( subseqFromArr( [ 1, 3, 8, 4, 10, 12, 3, 2, 24 ] ) );