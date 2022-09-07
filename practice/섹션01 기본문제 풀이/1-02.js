//? 2. 삼각형 판별하기
//* 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면
//* "Yes" 를 출력하고, 만들 수 없으면 "No"를 출력한다.

const solution = (a, b, c) => {
  let sum = a + b + c;
  let max = a > b ? a : b;
  max < c && (max = c);

  return sum - max > max ? "Yes" : "No";
};

console.log(solution(6, 7, 11)); // Yes
console.log(solution(13, 33, 17)); // No
