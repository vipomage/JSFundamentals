function figArea( w1, h1, w2, h2 ) {
    let fig1 = w1*h1;
    let fig2 = w2*h2;
    let overLap = Math.min(w1,w2)*Math.min(h1,h2);

    return fig1+fig2-overLap
}

console.log( figArea( 2, 4, 5, 3 ) );