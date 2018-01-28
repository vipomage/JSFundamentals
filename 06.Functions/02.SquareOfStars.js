function squareOfStars( input ) {
    for ( let i = 1; i <=input; i++ ) {
        console.log('*'.repeat(input).split('').join(" "));
    }
}



squareOfStars(10);