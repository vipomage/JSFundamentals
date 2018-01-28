function avgCheck( input ) {
    let text = input.toString().split( '' );
    let avg =average(text);
    while (avg <=5){
        text.push('9');
        avg = average(text,avg)
    }
    return text.join('');

    function average( text ) {
        let avg = 0;
        for ( let i = 0; i < text.length; i++ ) {
            avg += Number(text[ i ]);
        }
        avg = avg/text.length;
        return avg;
    }
}


console.log( avgCheck( 101 ) );
console.log( avgCheck( 5835 ) );
console.log( avgCheck( 5553 ) );
console.log( avgCheck( 0 ) );