//? 5. 등수구하기
//* N(1 <= N <= 100)명의 학생의 국어점수가 입력되면
//* 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

const solution = (arr) => {
  const res = [];
  let rank = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) rank += 1;
    }
    res.push(rank);
    rank = 1;
  }

  return res;
};

const arr = [87, 89, 92, 100, 76];
console.log(solution(arr)); // [4, 3, 2, 1, 5]

const arr2 = [92, 92, 92, 100, 76];
console.log(solution(arr2)); // [2, 2, 2, 1, 5]
