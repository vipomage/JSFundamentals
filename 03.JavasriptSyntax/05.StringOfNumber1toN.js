function strOf1toN(arg){

    let input = Number(arg);
    let output = '';

    for ( let i = 1; i <= input; i++ ) {
        output = output.concat(i)
    }
    return output;
}


console.log( strOf1toN( '11' ) );