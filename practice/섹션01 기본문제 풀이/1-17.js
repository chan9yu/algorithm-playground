//? 17. 중복단어제거
//* N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
//* 출력하는 문자열은 원래의 입력순서를 유지합니다.

const solution = (arr) => {
  const answer = [];
  for (let v of arr) answer.indexOf(v) === -1 && answer.push(v);

  return answer;
};

const arr = ["good", "time", "good", "time", "student"];
console.log(solution(arr)); // ['good', 'time', 'student']
