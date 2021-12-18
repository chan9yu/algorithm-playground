// 4. 가장 짧은 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let v of s) {
    if (v === t) {
      p = 0;
      answer.push(p);
    } else {
      p += 1;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p += 1;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

// 내가 푼 거!
function solution2(s, t) {
  let answer2 = [];
  let p = 1000;
  for (let v of s) {
    if (v === t) p = 0;
    else p += 1;
    answer2.push(p);
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else p += 1;
    if (answer2[i] > p) answer2[i] = p;
  }
  return answer2;
}

let str2 = "teachermode";
console.log(solution2(str2, "e"));
