function equalNeighborsCount( matrix ) {

    let neighbors = 0;
    for ( let row = 0; row < matrix.length; row++ ) {
        for ( let col = 0; col < matrix[ row ].length; col++ ) {
            if ( row === matrix.length - 1 ) {
                let current = matrix[ row ][ col ];
                let currentArrNextElmnt = matrix[ row ][ col + 1 ];
                if ( current === currentArrNextElmnt && currentArrNextElmnt ) {
                    neighbors++
                }
            }
            else {
                let current = matrix[ row ][ col ];
                let currentArrNextElmnt = matrix[ row ][ col + 1 ];
                let nextArrElment = matrix[ row + 1 ][ col ];
                if ( current === nextArrElment ) {
                    neighbors++
                }
                if ( current === currentArrNextElmnt ) {
                    neighbors++
                }
            }
        }
    }
    return neighbors;
}

console.log( equalNeighborsCount( [ [ '1', '1' ],
    [ '1', '1' ] ] ) );
console.log( equalNeighborsCount( [ [ '2', '2', '5', '7', '4' ], [ '4', '0', '5', '3', '4' ], [ '2', '5', '5', '4', '2' ] ] ) );
console.log( equalNeighborsCount( [ [ '2', '3', '4', '7', '0' ], [ '4', '0', '5', '3', '4' ], [ '2', '3', '5', '4', '2' ], [ '9', '8',
    '7', '5', '4' ] ] ) );
console.log( equalNeighborsCount( [ [ 'test', 'yes', 'yo', 'ho' ], [ 'well', 'done', 'yo', '6' ], [ 'not', 'done',
    'yet', '5' ] ] ) );
