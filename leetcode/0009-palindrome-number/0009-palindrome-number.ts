function isPalindrome(x: number): boolean {
    let str = String(x);
    let right = str.length - 1;

    if (str[0] === '-') return false;

    for (let left = 0; left < Math.floor(str.length / 2); left++) {
        if (str[left] !== str[right]) return false;
        right -= 1;
    }

    return true;
};