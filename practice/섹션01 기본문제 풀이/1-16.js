//? 16. 중복문자제거
//* 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
//* 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

const solution = (s) => {
  const answer = [];
  for (let v of s) answer.indexOf(v) === -1 && answer.push(v);

  return answer.join("");
};

console.log(solution("ksekkset")); // kset
