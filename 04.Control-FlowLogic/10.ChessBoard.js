function chessBoard( input ) {
    let container = '<div class="chessboard">\n';
    let black = true;
    for ( let i = 1; i <=input; i++ ) {
        container += '  <div>\n';
        if (i%2 === 0) {
            black =false;
        }else {black = true}
        for ( let j = 1; j <=input; j++ ) {

            if (black) {
                container += '    <span class="black"></span>\n';
                black = false;
            }else{
                container += '    <span class="white"></span>\n';
                black = true;
            }

        }
        container += '  </div>\n';

    }
    return container += '</div>';
}

console.log( chessBoard( 2) );