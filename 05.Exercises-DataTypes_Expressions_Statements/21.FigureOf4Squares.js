function figOf4Squares( size ) {

    let output = "";

    function draw( num, symbol ) {
        let str = "";
        for ( let i = 0; i < num; i++ ) {
            str += symbol;
        }
        return str;
    }

    let firstMiddleLastRow = "+" + draw( (size - 2), "-" ) + "+" + draw( (size - 2), "-" ) + "+\n";
    output += firstMiddleLastRow;
    let half = Math.floor( (size - 3) / 2 );

    if ( half >= 0 ) {
        let middleRows = "|" + draw( (size - 2), " " ) + "|" + draw( (size - 2), " " ) + "|\n";

        for ( let i = 0; i < half; i++ ) {
            output += middleRows;
        }
        output += firstMiddleLastRow;
        for ( let i = 0; i < half; i++ ) {
            output += middleRows;
        }

        output += firstMiddleLastRow;
        return output;
    }

    return output;
}