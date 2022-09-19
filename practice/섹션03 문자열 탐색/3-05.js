//? 5. 문자열 압축
//* 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
//* 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
//* 단 반복횟수가 1인 경우 생략합니다.

const solution = (s) => {
  s = s.split("");
  let cnt = 0;
  const res = [];

  for (let i = 0; i < s.length; i++) {
    cnt += 1;
    if (s[i] !== s[i + 1]) {
      res.push(s[i]);
      cnt > 1 && res.push(cnt);
      cnt = 0;
    }
  }

  return res.join("");
};

console.log(solution("KKHSSSSSSSE")); // "K2HS7E"
