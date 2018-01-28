function aggrEllmnts( arr ) {

    function summing( arr ) {
        let accum = 0;
        for (number of arr){
            accum+= number
        }
        return accum;
    }
    function inverse( arr ) {
        let accum = 0;
        for (number of arr){
            accum+= 1/number
        }
        return accum;
    }

    let sum = summing(arr);
    let inv = inverse(arr);
    let conc = arr.join('');

    return `${sum}\n${inv}\n${conc}`
}

console.log( aggrEllmnts( [ 1, 2, 3 ] ) );
console.log( aggrEllmnts( [ 2, 4, 8 ,16] ) );
