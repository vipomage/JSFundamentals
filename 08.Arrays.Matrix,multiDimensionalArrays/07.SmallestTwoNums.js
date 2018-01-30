function smallestTwo( arr ) {

    let compare = ( a, b ) => {
        return a - b;
    };
    let sorted = arr.sort( compare );

    let out = [ sorted[ 0 ], sorted[ 1 ] ];

    return out.join( ' ' );

}


console.log( smallestTwo( [ 30, 15, 50, 5 ] ) );
console.log( smallestTwo( [ 3, 0, 10, 4, 7, 3 ] ) );