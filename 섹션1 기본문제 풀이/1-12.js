// 12. 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성
function solution(s) {
  // let answer = "";
  // for (let v of s) {
  //   let num = v.charCodeAt();
  //   // 대문자와 소문자 아스키 넘버의 간격은 32 이다.
  //   if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
  //   else answer += v;
  //   // if (v !== v.toUpperCase()) answer += v.toUpperCase();
  //   // else answer += v;
  // }
  return s.toUpperCase();
}

let str = "ItisTimeToStudy";
console.log(solution(str));
