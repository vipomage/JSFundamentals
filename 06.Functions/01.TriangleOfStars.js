function triangleOfStars( input ) {
    let reverse = false;
    for ( let i = 1; i <= input; ) {
        if (i=== -1) {
            return
        }
        console.log( '*'.repeat( i ) );
        if ( i === input ) {
            reverse = true
        }
        if ( !reverse ) {
            i++;
        }else {
            i--;
        }
    }
}


triangleOfStars( 3 );