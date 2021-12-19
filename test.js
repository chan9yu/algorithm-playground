function solution(n, arr1, arr2) {
  let answer = [];
  let num1, num2, tmp;
  for (let i = 0; i < n; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    tmp = "";
    for (let j = 0; j < n; j++) {
      // num1 num2 둘 중 하나가 벽이면 벽임
      tmp = (num1 % 2) + (num2 % 2) ? "#" + tmp : " " + tmp;
      // 소수점 제거
      num1 = Math.floor(num1 / 2);
      num2 = Math.floor(num2 / 2);
    }
    answer.push(tmp);
  }
  return answer;
}

let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
console.log(solution(5, arr1, arr2));
