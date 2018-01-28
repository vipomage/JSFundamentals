function counter(arg,arg2){

    let count = 0;
    for ( let i = 0; i < arg.length; i++ ) {
        if (arg[i] === arg2) {
            count++;
        }
    }
    return count
}


console.log( counter( 'hello', 'l' ) );
console.log( counter( 'panther', 'n' ) );
