# algorithm-playground

> ✍🏼 algorithm playground repository

코딩테스트 사이트에서 문제를 풀었던 내용들을 기록합니다

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
