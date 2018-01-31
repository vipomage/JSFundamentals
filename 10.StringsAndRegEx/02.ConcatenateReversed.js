function concReversed(arr) {
    arr.reverse();
    let tempArray = [];
    for (let i = 0; i < arr.length; i++) {
        tempArray.push(arr[i].split('').reverse().join(''))

    }
    return tempArray.join('')
}

console.log(concReversed(['I', 'am', 'student']));