function prinNthElmnt( arr ) {
    let nStep = Number( arr[ arr.length - 1 ] );

    for ( let i = 0; i < arr.length - 1; i += nStep ) {
        console.log( arr[ i ] );

    }
}


prinNthElmnt( [ '5', '20', '31', '4', '20', '2' ] );