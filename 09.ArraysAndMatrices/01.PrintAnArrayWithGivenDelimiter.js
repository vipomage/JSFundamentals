function printArray( arr ) {
    let delimiter = arr[ arr.length - 1 ];
    let output = [];
    for ( let i = 0; i < arr.length - 1; i++ ) {
        output.push( arr[ i ] )
    }

    return output.join( delimiter )
}

console.log( printArray( [ 'One', 'Two', 'Three', 'Four', 'Five', '-' ] ) );