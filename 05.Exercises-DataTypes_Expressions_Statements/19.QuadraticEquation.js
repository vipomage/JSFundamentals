function quadEquation(a,b,c){
    // let a = arr[0];
    // let b = arr[1];
    // let c = arr[2];

    let disc = Math.pow(b,2)-4*a*c;

    let x1;
    let x2;

    if (disc>0) {
        x1 = ((b * -1)+Math.sqrt(disc))/(2*a);
        x2 = ((b * -1)-Math.sqrt(disc))/(2*a);

        return `${x2}\n${x1}`

    }if (disc === 0) {
        x1 = (b* -1)/(2*a);
        return x1
    }if (disc<0) {
        return 'No'
    }
}

console.log( quadEquation(  6, 11, -35  ) );
console.log( quadEquation( [ 1, -12, 36 ] ) );
console.log( quadEquation( [ 5, 2, 1 ] ) );