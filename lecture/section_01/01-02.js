/**
 * 삼각형 판별하기
 *
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어진다.
 * 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
 *
 * ▣ 입력 설명
 * 첫 번째 줄에 100 이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
 *
 * ▣ 출력 설명
 * 첫 번째 줄에 “YES", "NO"를 출력한다.
 *
 * ▣ 입력 예제 1
 * 6 7 11
 *
 * ▣ 출력 예제 1
 * YES
 *
 * ▣ 입력 예제 2
 * 13 33 17
 *
 * ▣ 출력 예제 2
 * NO
 */

function solution(a, b, c) {
	const sum = a + b + c;
	const max = Math.max(a, b, c);

	return sum - max > max ? 'YES' : 'NO';
}

const input1 = [6, 7, 11];
const output1 = solution(...input1);
console.log(output1); // YES

const input2 = [13, 33, 17];
const output2 = solution(...input2);
console.log(output2); // NO
