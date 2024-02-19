# 🧑🏻‍💻 Algorithm Playground

공부해야해요 ㅠㅠ...

<br />

## 알고리즘 정리

- [동적계획법(DP, Dynamic Programming)](https://github.com/chan9yu/algorithm-playground/blob/master/lecture/10-dynamic_programming/README.md)

<br />

## fs 모듈을 이용하는 방법

### 백준 제출용

1. 한 줄로 입력을 받을 때

```js
const fs = require("fs");
const input = fs.readFileSync("/...").toString().split(" ");

const num = Number(input);

for (let i = 1; i <= num; i++) {
	console.log(i);
}
```

2. 여러 줄로 입력을 받을 때

```js
const fs = require("fs");
const input = fs.readFileSync("/...").toString().split("\n");
const numbers = [];

for (let i = 1; i < input.length; i++) {
	if (input[i] !== "") {
		numbers.push(input[i].split(" "));
	}
}

for (let i = 0; i < numbers.length; i++) {
	let num1 = Number(numbers[i][0]);
	let num2 = Number(numbers[i][1]);
	console.log(num1 + num2);
}
```
