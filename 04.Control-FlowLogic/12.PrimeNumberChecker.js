function isPrime( num ) {
    if (num <= 0) {
        return false
    }
    for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return num !== 1;
}


console.log( isPrime( 7 ) );
console.log( isPrime( 8 ) );
console.log( isPrime( 81 ) );