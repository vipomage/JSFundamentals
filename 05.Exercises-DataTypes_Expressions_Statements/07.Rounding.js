function rounding( arr ) {
    let number = arr[0];
    let precision = arr[1];
    if (precision>15) {
        precision = 15;
    }

    return Number(Math.round(number+`e${precision}`)+`e-${precision}`);
}


console.log(rounding([3.1415926535897932384626433832795, 2]));
console.log(rounding([10.5,3]));