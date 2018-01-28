function interest( arr ) {
    let pSum = arr[0];
    let nominalI = arr[1]/100;
    let nFreq = 12/arr[2];
    let timeSp = arr[3];

    return pSum*Math.pow(1+(nominalI/nFreq),nFreq*timeSp)
}


console.log( interest([1500, 4.3, 3, 6]) );
console.log(interest([100000, 5, 12, 25]));