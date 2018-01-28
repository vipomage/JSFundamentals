function oddEven( input ) {
    if ( !Number.isInteger( input ) ) {
        return 'invalid'
    }

    let even = input % 2 === 0;

    if ( even ) {
        return 'even'
    } else {
        return 'odd'
    }
}

console.log( oddEven( 5 ) );
console.log( oddEven( 8 ) );
console.log( oddEven( 1.5 ) );