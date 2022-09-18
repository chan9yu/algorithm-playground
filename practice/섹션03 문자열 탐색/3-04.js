//? 4. 가장 짧은 문자거리
//* 한 개의 문자열 s와 문자 t가 주어지면
//* 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

const solution = (s, t) => {
  s = s.split("");
  let res = [];
  let cnt = 0;

  for (let v of s) {
    v === t ? (cnt = 0) : (cnt += 1);
    res.push(cnt);
  }

  for (let i = s.length - 1; i >= 0; i--) {
    s[i] === t ? (cnt = 0) : (cnt += 1);
    res[i] = Math.min(res[i], cnt);
  }

  return res.join(" ");
};

console.log(solution("teachermode", "e")); // "1 0 1 2 1 0 1 2 2 1 0"
