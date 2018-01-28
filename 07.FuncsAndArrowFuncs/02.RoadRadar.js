function radar( arr ) {
    let speed = arr[ 0 ];
    let currentZone = arr[ 1 ];

    let currentZoneLimit = getLimit( currentZone );

    function getLimit( zone ) {
        switch ( zone ) {
            case 'motorway' :
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }

    let overSpeed = speed - currentZoneLimit

    if ( overSpeed <= 0 ) {
        return ''
    } else {
        if ( overSpeed > 0 && overSpeed <= 20 ) {
            console.log( 'speeding' );
        }
        if ( overSpeed > 20 && overSpeed <= 40 ) {
            console.log( 'excessive speeding' );
        }
        if ( overSpeed > 40 ) {
            console.log( 'reckless driving' );
        }
    }
}


//radar( [ 40, 'city' ] );
radar( [ 21, 'residential' ] );
radar( [ 120, 'interstate' ] );
radar( [ 200, 'motorway' ] );