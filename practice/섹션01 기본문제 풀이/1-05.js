//? 5. 최솟값 구하기
//* 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

const solution = (arr) => {
  let min = Number.MAX_SAFE_INTEGER;
  for (let v of arr) min > v && (min = v);

  return min;
};

const arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr)); // 1
