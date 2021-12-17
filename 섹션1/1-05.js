// 5. 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력
function solution(arr) {
  // min = Number.MAX_SAFE_INTEGER => 가장 큰 정수 값으로 초기화
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// 내장함수 사용
function solution2(arr2) {
  let answer = Math.min(...arr2); // 최솟값
  console.log(Math.max(...arr2)); // 최댓값
  return answer;
}

let arr2 = [5, 7, 1, 3, 2, 9, 11];
console.log(solution2(arr2));
