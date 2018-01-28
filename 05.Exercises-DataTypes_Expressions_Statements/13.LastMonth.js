function lastMonth( arr ) {

    return new Date(arr[2], arr[1]-1, 0).getDate();
}


console.log( lastMonth( [ 17, 3, 2002 ] ) );
console.log( lastMonth( [13, 12, 2004] ) );