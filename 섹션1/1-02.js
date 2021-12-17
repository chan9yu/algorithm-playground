// 2. 삼각형 판별하기
// 길이가 서로 다룬 A, B, C 세 개의 막대 길이가 주어지면
// 이 세 막대로 삼각형을 만들 수 있으면 'Yes' 아니면 'No' 출력
function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "NO";
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
