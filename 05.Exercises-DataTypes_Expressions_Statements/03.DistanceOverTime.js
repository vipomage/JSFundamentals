function distanceOTime( arr ) {
    let v1 = arr[0]*1000;
    let v2 = arr[1]*1000;
    let time = arr[2]/3600;

    let obj1Dist = v1*time;
    let obj2Dist = v2*time;

    return  Math.abs(obj1Dist-obj2Dist);

}


console.log( distanceOTime( [0,60,3600] ) );
console.log( distanceOTime( [11,10,120] ) );
console.log( distanceOTime( [5,-5,40] ) );