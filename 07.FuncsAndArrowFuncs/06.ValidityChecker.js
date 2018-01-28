function validityCheck( arr ) {
    let x1 = arr[ 0 ];
    let y1 = arr[ 1 ];
    let x2 = arr[ 2 ];
    let y2 = arr[ 3 ];

    console.log( isValid( x1, y1, 0, 0 ) );
    console.log( isValid( x2, y2, 0, 0 ) );
    console.log( isValid( x1, y1, x2, y2 ) );

    function isValid( x1, y1, x2, y2 ) {
        let number = Math.sqrt( Math.pow( x2 - x1, 2 ) + Math.pow( y2 - y1, 2 ) );
        let valid = Number.isInteger( number );
        if ( valid ) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} ` + 'is valid'
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} ` + 'is invalid'
        }
    }

}

validityCheck( [ 3, 0, 0, 4 ] );
validityCheck( [ 2, 1, 1, 1 ] );