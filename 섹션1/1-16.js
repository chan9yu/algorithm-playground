// 16. 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution("ksekkset"));

// 16-2. 특정문자 개수 카운팅
function solution2(s) {
  let answer2 = 0;
  let pos = s.indexOf("k");
  while (pos !== -1) {
    answer2 += 1;
    pos = s.indexOf("k", pos + 1);
  }
  return answer2;
}
console.log(solution2("ksekkset"));
