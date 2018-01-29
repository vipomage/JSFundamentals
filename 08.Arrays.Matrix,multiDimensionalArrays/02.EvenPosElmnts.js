function evenPosElmnts( arr ) {
    let out = [];
    for ( let i = 0; i < arr.length; i += 2 ) {
        out.push( arr[ i ] );
    }
    return out.join( ' ' );
}

//console.log( evenPosElmnts( [ '20', '30', '40' ] ) );
console.log( evenPosElmnts( [ '5', '10' ] ) );
console.log( evenPosElmnts( [ 'js' ] ) );