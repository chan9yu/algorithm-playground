// 2. 괄호문자제거
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

function solution(s) {
  let answer;
  let stack = [];
  for (let v of s) {
    if (v === ")") while (stack.pop() !== "(");
    else stack.push(v);
  }
  answer = stack.join("");
  return answer;
}

let str = "(AB(C)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
