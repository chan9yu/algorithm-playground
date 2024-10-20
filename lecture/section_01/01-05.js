/**
 * 최솟값 구하기
 *
 * ▣ 입력 설명
 * 첫 번째 줄에 7개의 수가 주어진다.
 *
 * ▣ 출력 설명
 * 첫 번째 줄에 가장 작은 값을 출력한다.
 *
 * ▣ 입력 예제 1
 * 5 3 7 11 2 15 17
 *
 * ▣ 출력 예제 1
 * 2
 */

function solution(arr) {
	let min = Number.MAX_SAFE_INTEGER;
	arr.forEach(v => min > v && (min = v));
	return min;
}

function solution2(arr) {
	return Math.min(...arr);
}

const input = [5, 3, 7, 11, 2, 15, 17];
const output = solution(input);
console.log(output); // 2

const output2 = solution2(input);
console.log(output2); // 2
