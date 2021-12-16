// 6. 홀수
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
// 고른 홀수들 중 최소값을 찾는 프로그램을 작성
function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  arr.forEach((v) => {
    // 홀수 검사
    if (v % 2 === 1) {
      sum += v; // 합 구하기
      if (v < min) min = v; // 최소값 구하기
    }
  });
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
