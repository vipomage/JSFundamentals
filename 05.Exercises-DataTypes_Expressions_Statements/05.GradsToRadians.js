function gradToRad( input ) {

    let grads = Number(input);

    grads = grads % 400;
    if (grads < 0) {
        grads += 400;
    }

    return  grads / 400 * 360;

}



console.log( gradToRad( 100 ) );
console.log( gradToRad( 400 ) );
console.log( gradToRad( 850 ) );
console.log( gradToRad( -50 ) );
