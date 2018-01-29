function dnaHelix( input ) {
    let order = [ 'A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G' ];
    let lastUsed = 0;
    let row = -1;
    for ( let i = 0; i < input; i++ ) {
        row++;
        if ( i % 4 === 0 ) {
            row %= 4;
        }
        if ( lastUsed >= 10 ) {
            lastUsed = 0;
        }
        if ( row === 0 ) {
            console.log( `**${order[ lastUsed ]}${order[ lastUsed + 1 ]}**` );
            lastUsed += 2;
        }
        else if ( row === 1 ) {
            console.log( `*${order[ lastUsed ]}--${order[ lastUsed + 1 ]}*` );
            lastUsed += 2;
        }
        else if ( row === 2 ) {
            console.log( `${order[ lastUsed ]}----${order[ lastUsed + 1 ]}` );
            lastUsed += 2;
        }
        else if ( row === 3 ) {
            console.log( `*${order[ lastUsed ]}--${order[ lastUsed + 1 ]}*` );
            lastUsed += 2;
        }

    }
}

dnaHelix( 4 );