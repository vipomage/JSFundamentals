function circleArea( input ) {
    let area = Math.PI*(input*input);

    return `${area}\r\n${Number.parseFloat(area).toFixed(2)}`
}


console.log( circleArea( 5 ) );
