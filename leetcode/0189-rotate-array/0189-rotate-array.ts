function reverse(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left += 1;
        right -= 1;
    }
}

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k = k % n;

	// 1. 전체 배열 뒤집기
    reverse(nums, 0, n - 1);

	// 2. 앞쪽 k개 뒤집기
    reverse(nums, 0, k - 1);

	// 3. 나머지 뒤집기
    reverse(nums, k, n - 1);
};