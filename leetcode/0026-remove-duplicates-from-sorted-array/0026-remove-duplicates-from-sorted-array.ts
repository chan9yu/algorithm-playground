function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let answer = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[answer - 1]) continue;
        nums[answer] = nums[i];
        answer += 1;
    }

    return answer;
}