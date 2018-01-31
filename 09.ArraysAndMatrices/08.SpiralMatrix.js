function spiralMatrix(rows, cols) {
    let targetNum = rows * cols;
    let number = 1;
    let matrix = fillMatrixWithZeros(rows, cols);

    let currentRow = 0;
    let currentCol = 0;
    let rotations = 0;

    while (targetNum >= number) {
        // top row
        for (let idx = rotations; idx < cols - rotations; idx++) {
            matrix[currentRow][currentCol++] = number++;
        }
        // right col downwards
        currentCol -= 1;
        for (let i = ++currentRow; i <= rows - 1 - rotations; i++) {
            matrix[currentRow++][currentCol] = number++;
        }
        //bottom row leftwards
        currentRow -= 1;
        for (let i = --currentCol; i >= rotations; i--) {
            matrix[currentRow][currentCol--] = number++;
        }
        // left col upwards
        currentCol += 1;

        for (let i = --currentRow; i > rotations; i--) {
            matrix[currentRow--][currentCol] = number++;
        }
        rotations++;
        currentCol++;
        currentRow++;
    }
    printMatrix(matrix);

    function printMatrix(matrix) {
        console.log(matrix.map(e => e.join(' ')).join('\n'));
    }

    function fillMatrixWithZeros(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push('0'.repeat(cols).split('').map(Number))
        }
        return matrix
    }

}

//THIS IS EVIL! i feel dumb

spiralMatrix(5, 5);

/*
1  2  3  4  5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9
*/