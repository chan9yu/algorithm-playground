# algorithm-playground

> ✍🏼 algorithm playground repository

알고리즘에 대한 내용을 학습하고 문제풀이를 기록합니다.

<br />

## 🗂️ Documents

### [1주차] 시간 복잡도 & 공간복잡도

1. [시간 복잡도란?](./__documents__/01-01-time-complexity.md)
1. [공간 복잡도란?](./__documents__/01-02-space-complexity.md)

<br />

## fs 모듈을 이용하는 방법

### 백준 제출용

1. 한 줄로 입력을 받을 때

```js
const fs = require('fs');
const input = fs.readFileSync('/...').toString().split(' ');

const num = Number(input);

for (let i = 1; i <= num; i++) {
	console.log(i);
}
```

2. 여러 줄로 입력을 받을 때

```js
const fs = require('fs');
const input = fs.readFileSync('/...').toString().split('\n');
const numbers = [];

for (let i = 1; i < input.length; i++) {
	if (input[i] !== '') {
		numbers.push(input[i].split(' '));
	}
}

for (let i = 0; i < numbers.length; i++) {
	let num1 = Number(numbers[i][0]);
	let num2 = Number(numbers[i][1]);
	console.log(num1 + num2);
}
```
