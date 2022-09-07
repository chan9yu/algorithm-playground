//? 1. 세 수 중 최솟값
//* 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
//* (정렬을 사용하면 안됩니다.)

const solution = (a, b, c) => {
  let min = a < b ? a : b;
  min > c && (min = c);

  return min;
};

console.log(solution(2, 5, 1)); // 1
console.log(solution(6, 5, 11)); // 5
console.log(solution(100, 9, 3)); // 3
