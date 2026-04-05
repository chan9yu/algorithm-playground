function isValidSudoku(board: string[][]): boolean {
    const set = new Set();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const value = board[r][c];
            if (value === '.') continue;

            const rowKey = `row-${r}-${value}`;
            const colKey = `col-${c}-${value}`;
            const boxKey = `box-${Math.floor(r / 3) * 3 + Math.floor(c / 3)}-${value}`;

            if (set.has(rowKey) || set.has(colKey) || set.has(boxKey)) {
                return false;
            }

            set.add(rowKey);
            set.add(colKey);
            set.add(boxKey);
        }
    }

    return true;
};