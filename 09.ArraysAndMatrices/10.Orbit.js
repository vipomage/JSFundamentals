function orbit(arr) {
    let [rows, cols, targetRow, targetCol] = arr;
    let matrix = fillMatrixWithZeros(rows, cols);
    let number = 1;
    let waves = 1;
    matrix[targetRow][targetCol] = number;

    while (!isMatrixFilled(matrix)) {
        number++;
        let topX = Math.max(0, targetRow - waves);
        let topY = Math.max(0, targetCol - waves);
        let bottomX = Math.min(rows - 1, targetRow + waves);
        let bottomY = Math.min(cols - 1, targetCol + waves);

        for (let row = topX; row <= bottomX; row++) {
            for (let col = topY; col <= bottomY; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][col] = number;
                }
            }
        }
        waves++;

    }

    printMatrix(matrix);

    function isMatrixFilled(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                const element = matrix[row][col];
                if (element === 0) {
                    return false
                }
            }

        }
        return true
    }

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


orbit([4, 4, 0, 0]);