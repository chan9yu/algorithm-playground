/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    // 1. 위 아래 뒤집기
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        for (let j = 0; j < matrix.length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[matrix.length - i - 1][j];
            matrix[matrix.length - i - 1][j] = temp;
        }
    }

    // 2. 대각선 뒤집기
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};