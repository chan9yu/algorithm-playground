function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start += 1;
        end -= 1;
    }
}

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;

	// 1. 전체 배열 뒤집기
    reverse(nums, 0, n - 1);

	// 2. 앞쪽 k개 뒤집기
    reverse(nums, 0, k - 1);

	// 3. 나머지 뒤집기
    reverse(nums, k, n - 1);
};