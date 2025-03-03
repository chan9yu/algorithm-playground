# algorithm-playground

> ✍🏼 algorithm playground repository

알고리즘에 대한 내용을 학습하고 문제풀이를 기록합니다.

<br />

## 🗂️ Documents

### [1주차] 시간 복잡도 & 공간복잡도

1. [시간 복잡도란?](./__documents__/01-01-time-complexity.md)
1. [공간 복잡도란?](./__documents__/01-02-space-complexity.md)

<br />

## 📝 백준에서 Javascript 이용하기

### readline 이용하기

```js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline
  .on('line', function (line) {
    input = line.split(' ').map(el => parseInt(el));
  })
  .on('close', function () {
    // 이 안에 솔루션 코드 작성
    let answer;
    console.log(answer);
    process.exit();
  });
```
