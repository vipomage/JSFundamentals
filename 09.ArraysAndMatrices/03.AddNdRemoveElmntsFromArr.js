function addOrRemove( arr ) {
    let output = [ 'Empty' ];
    let num = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] === 'add' && output[ 0 ] === 'Empty' ) {
            output = [ 1 ];
            num++;
        } else if ( arr[ i ] === 'add' ) {
            output.push( ++num );

        }
        if ( arr[ i ] === 'remove' ) {
            output.pop( ++num );
        }
    }
    if ( output.length === 0 ) {
        return 'Empty'
    }
    return output.join( '\n' )
}


console.log( addOrRemove( [ 'add', 'add', 'add', 'add' ] ) );
console.log( '\n' );
console.log( addOrRemove( [ 'add', 'add', 'remove', 'add', 'add' ] ) );
console.log( '\n' );
console.log( addOrRemove( [ 'remove', 'remove', 'remove' ] ) );