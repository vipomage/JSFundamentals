function uniqueSeqnces(numArr) {
    let output = new Map();
    let i = 0;
    for (let arrays of numArr) {
        let array = JSON.parse(arrays).sort((a, b) => b - a);
        output.set(array.length, array)
    }
    for (let array of [...output]
        .sort()
        ) {
        console.log(JSON.parse(JSON.stringify('[' + array[1].map(num => num).join(', ') + ']'))); //INSANITY
    }
}

uniqueSeqnces([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);

uniqueSeqnces([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]',
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);


//stole solution

function uniqueSequences(data) {
    let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    let arrays = new Map;
    for (let line of data) {
        let array = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let toStore = `[${array.join(', ')}]`;
        if (!arrays.has(toStore)) {
            arrays.set(toStore, array.length);
        }
    }

    console.log([...arrays.keys()].sort((a, b) => customSort(a, b, arrays)).join('\n'));
}