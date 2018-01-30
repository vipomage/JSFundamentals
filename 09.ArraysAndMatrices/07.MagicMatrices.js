function magicMatrix(arr) {

    function horizontalEq() {
        let sum = [];
        let horizontalEquality = true;
        for (let i = 0; i < arr.length; i++) {
            sum.push(arr[i].reduce((a, b) => a + b));
        }
        for (let i = 0; i < sum.length - 1; i++) {
            if (sum[i] !== sum[i + 1]) {
                horizontalEquality = false;
            }
        }
        return horizontalEquality;
    }

    function verticaleq() {
        let sum = [];
        let verticalEquality = true;
        for (let i = 0; i < arrays.length; i++) {
            sum.push(arrays[i].reduce((a, b) => a + b));
        }
        for (let i = 0; i < sum.length - 1; i++) {
            if (sum[i] !== sum[i + 1]) {
                verticalEquality = false;
            }
        }
        return verticalEquality;
    }

    let arrays = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            arrays.push(arr[i]);
        }
    }

    let verticalEquality = verticaleq();
    let horizontalEquality = horizontalEq();

    return !!(horizontalEquality && verticalEquality);
}

// console.log(magicMatrix([[0,2,3], [0,2,3], [0,2,3], [0,2,3], [0,2,3]]));
// console.log(magicMatrix([[1, 2, 2, 3], [1, 2, 2, 3], [1, 2, 2, 3], [1, 2, 2, 3], [1, 2, 2, 2]]));
// console.log(magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
// console.log(magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
// console.log(magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));


function magic(matrix) {

    let sum = 0;
    matrix[0].forEach(x => sum += x);
    for (let row = 1; row < matrix.length; row++) {
        let rowSum = 0;
        matrix[row].forEach(x => rowSum += x);
        if (rowSum !== sum) {
            return false;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== sum) {
            return false;
        }
    }
    return true;
}

console.log(magic([[0, 2, 3], [0, 2, 3], [0, 2, 3], [0, 2, 3], [0, 2, 3]]));
console.log(magic([[1, 2, 2, 3], [1, 2, 2, 3], [1, 2, 2, 3], [1, 2, 2, 3], [1, 2, 2, 2]]));
console.log(magic([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magic([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magic([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));