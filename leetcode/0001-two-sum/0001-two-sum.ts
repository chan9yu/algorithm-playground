function twoSum(nums: number[], target: number): number[] {
  const answer = []
  let left = 0;

  for (let right = left + 1; right < nums.length; right++) {
    if (nums[left] + nums[right] === target) {
        answer.push(left);
        answer.push(right);
        break;
    } 
    
    if (left + 1 === right) {
        continue;
    } else {
        while(left !== right - 1) {
            left += 1
            if (nums[left] + nums[right] === target) {
                answer.push(left);
                answer.push(right);
                break;
            }
        }
    }
  }

  return answer  
};