function biggestElmnt( outerArr ) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    for ( let i = 0; i < outerArr.length; i++ ) {
        let innerArr = outerArr[ i ];
        for ( let j = 0; j < innerArr.length; j++ ) {
            if ( innerArr[ j ] > biggestNum ) {
                biggestNum = innerArr[ j ];
            }

        }

    }
    return biggestNum;

}


console.log( biggestElmnt( [ [ 20, 50, 10 ], [ 8, 33, 145 ] ] ) );
console.log( biggestElmnt( [ [ 3, 5, 7, 12 ], [ -1, 4, 33, 2 ], [ 8, 3, 0, 4 ] ] ) );