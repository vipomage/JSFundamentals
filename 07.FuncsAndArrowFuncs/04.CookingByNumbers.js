function coockWithNums( arr ) {
    let num = arr[ 0 ];
    for ( let i = 1; i < arr.length; i++ ) {
        num = coock( arr[ i ], num );
        console.log( num );
    }

    function coock( order, num ) {
        switch ( order ) {
            case 'chop':
                return num / 2;
            case 'dice':
                return Number( Math.sqrt( num ) );
            case 'spice':
                return Number( num + 1 );
            case 'bake':
                return Number( num * 3 );
            case 'fillet':
                return Number( num * 0.8 )
        }
    }
}

coockWithNums( [ 32, 'chop', 'chop', 'chop', 'chop', 'chop' ] );
coockWithNums( [ 9, 'dice', 'spice', 'chop', 'bake', 'fillet' ] );