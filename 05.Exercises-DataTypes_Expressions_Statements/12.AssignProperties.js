function assignProps( arr ) {

    //return `{ ${arr[0]}: '${arr[1]}', ${arr[2]}: '${arr[3]}', ${arr[4]}: '${arr[5]}' }`
    let obj = {};
    for ( let i = 0; i < arr.length-1; i+=2 ) {
        obj[`${arr[i]}`] = arr[i+1]
    }
    return obj;
}


console.log(assignProps(['name', 'Pesho', 'age', '23', 'gender', 'male']));
console.log(assignProps(['ssid', '90127461', 'status', 'admin', 'expires', '600']));