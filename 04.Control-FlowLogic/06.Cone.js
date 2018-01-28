function cone( r, h ) {
    let area = Math.PI*r*(r+Math.sqrt((h*h)+(r*r)));
    let volume = Math.PI*(r*r)*(h/3);

    return `volume = ${volume}\r\narea = ${area}`
}


console.log( cone( 5, 5 ) );