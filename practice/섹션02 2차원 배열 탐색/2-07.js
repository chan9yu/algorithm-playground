//? 7. 봉우리
//* 지도 정보가 N * N 격자판에 주어지고 각 격자에는 그 지역의 높이가 쓰여있습니다.
//* 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
//* 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.

//* 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
//* 만약 N = 5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

const solution = (arr) => {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const top = i === 0 ? 0 : arr[i - 1][j];
      const left = j === 0 ? 0 : arr[i][j - 1];
      const right = j === arr.length - 1 ? 0 : arr[i][j + 1];
      const bottom = i === arr.length - 1 ? 0 : arr[i + 1][j];

      if (
        arr[i][j] > top &&
        arr[i][j] > left &&
        arr[i][j] > right &&
        arr[i][j] > bottom
      )
        res += 1;
    }
  }

  return res;
};

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr)); // 10
