function singleNumber(nums: number[]): number {
    const map = new Map();
    let answer = 0;

    for (const v of nums) {
        map.set(v, (map.get(v) ?? 0) + 1);
    }

    map.forEach((v, k) => {
        if (v === 1) {
            answer = k;
        }
    })

    return answer;
};