function negPos( arr ) {
    let out = [];

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] < 0 ) {
            out.unshift( arr[ i ] )
        } else {
            out.push( arr[ i ] )
        }
    }
    return out.join( '\n' )
}

console.log( negPos( [ 7, -2, 8, 9 ] ) );
console.log( negPos( [ 3, -2, 0, -1 ] ) );