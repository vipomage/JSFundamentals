function magicMatrix(arr) {
    function horizontalSum(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    let magic = true;
    let horizontalSums = [];

    for (array of arr) {
        horizontalSums.push(horizontalSum(array))
    }
    for (let i = 0; i < horizontalSums.length - 1; i++) {

        if (horizontalSums[i] !== horizontalSums[i + 1]) {
            magic = false
        }
    }
    let verticalSums = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][i];
        }
    }

    for (let col = 0; col < arr[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < arr[0].length; row++) {
            sumCol += arr[col][row];
        }
        if (sumCol !== horizontalSums[0]) {
            return false;
        }
    }
    //fuck this magic
    return magic

}

console.log(magicMatrix([[0], [0], [0], [0], [1]]));
console.log(magicMatrix([[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]]));
console.log(magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));

