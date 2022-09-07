//? 14. 가장 긴 문자열
//* N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

const solution = (s) => {
  let answer = s[0];
  let max = Number.MIN_SAFE_INTEGER;

  for (let v of s) {
    if (v.length > max) {
      max = v.length;
      answer = v;
    }
  }

  return answer;
};

const arr = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(arr)); // beautiful
