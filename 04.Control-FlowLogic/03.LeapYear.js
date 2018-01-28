function leapYear( input ) {

    if ( input % 4 === 0 && input % 100 !== 0 ) {
        return 'yes'
    }
    if (input%400 === 0) {
        return 'yes'
    }else {
        return 'no'
    }
}

console.log( leapYear( 1999 ) );
console.log( leapYear( 2000 ) );
console.log( leapYear( 1900 ) );