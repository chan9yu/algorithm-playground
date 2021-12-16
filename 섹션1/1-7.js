// 7. 10부제
// 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것
// 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때
// 위반하는 자동차의 대수를 출력하는 프로그램을 작성
function solution(day, arr) {
  let answer = 0;
  arr.map((v) => {
    if (v % 10 === day) answer += 1;
  });
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
