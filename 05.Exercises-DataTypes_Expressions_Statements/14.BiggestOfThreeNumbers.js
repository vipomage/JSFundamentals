function returnMax( arr ) {
    let max = Number.MIN_SAFE_INTEGER ;

    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}



console.log(returnMax([5,-2,7]));
console.log(returnMax([130,5,99]));
console.log(returnMax([43,43.2,43.1]));
console.log(returnMax([5,5,5]));
console.log(returnMax([-10,-20,-30]));