// 1. 회문 문자열
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다
function solution(s) {
  let answer = "YES";
  let len = s.length;
  s = s.toLowerCase();
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) {
      answer = "NO";
      break;
    }
  }
  return answer;
}

let str = "goooG";
console.log(solution(str));

// 배열 메소드 사용
function solution2(s2) {
  let answer2 = "YES";
  s2 = s2.toLowerCase();
  if (s2 !== s2.split("").reverse().join("")) answer2 = "NO";
  return answer2;
}

let str2 = "gooGd";
console.log(solution2(str2));
