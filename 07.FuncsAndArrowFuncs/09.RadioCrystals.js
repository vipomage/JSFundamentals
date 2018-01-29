function radioCrystals( arr ) {
    let targetSize = arr[ 0 ];

    let cut = ( num ) => num / 4;
    let lap = ( num ) => num * 0.8;
    let grind = ( num ) => num - 20;
    let etch = ( num ) => num - 2;
    let transportAndWash = ( num ) => {
        console.log( 'Transporting and washing' );
        return Math.floor( num );
    };
    let xRay = ( num ) => {
        console.log( 'X-ray x1' );
        return ++num;
    };


    for ( let i = 1; i < arr.length; i++ ) {
        let microns = arr[ i ];
        console.log( `Processing chunk ${arr[ i ]} microns` );
        microns = executeOperation( targetSize, microns, 'Cut', cut );
        microns = executeOperation( targetSize, microns, 'Lap', lap );
        microns = executeOperation( targetSize, microns, 'Grind', grind );
        microns = executeOperation( targetSize, microns, 'Etch', etch );

        if ( microns + 1 === targetSize ) {
            microns = xRay( microns );
        }
        console.log( `Finished crystal ${microns} microns` );
    }

    function executeOperation( targetSize, size, operationName, operation ) {
        let counter = 0;
        while ( operation( size ) >= targetSize - 1 ) {
            size = operation( size );
            counter++;
        }
        if ( counter > 0 ) {
            console.log( `${operationName} x${counter}` );
            size = transportAndWash( size )
        }
        return size
    }
}

//radioCrystals( [ 1375, 50000 ] );
radioCrystals( [ 1000, 4000, 8100 ] );