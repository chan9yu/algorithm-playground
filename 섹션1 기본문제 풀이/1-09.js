// 9. A를 #으로
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요
function solution(s) {
  let answer = "";
  for (let v of s) answer += v === "A" ? "#" : v;
  return answer;
}

let str = "BANANA";
console.log(solution(str));

// replace 사용
function solution2(s2) {
  let answer2;
  answer2 = s2.replace(/A/g, "#");
  return answer2;
}

let str2 = "BANANA";
console.log(solution2(str2));
