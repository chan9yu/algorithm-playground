//? 1181. 단어 정렬
//* 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
//* 1. 길이가 짧은 것부터
//* 2. 길이가 같으면 사전 순으로

const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./1181.txt").toString().trim().split("\n");
const [n, ...rest] = input;

const solution = (arr) => {
  const set = new Set(arr);
  const answer = [...set];

  answer.sort((a, b) =>
    a.length !== b.length ? (a.length > b.length ? 1 : -1) : a > b ? 1 : -1
  );

  return answer.join("\n");
};

console.log(solution(rest));
