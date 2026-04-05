function reverse(x: number): number {
    const arr = String(x).split('');

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const temp = arr[left];

        if (temp === '-') {
            left += 1;
        } else {
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
    }

    const answer = Number(arr.join(''));
    const constraint = answer >= -(2 ** 31) && answer <= (2 ** 31) - 1;

    return constraint ? answer : 0;
};