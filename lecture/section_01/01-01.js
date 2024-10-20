/**
 * 세 수 중 최솟값
 *
 * 100 이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
 * (정렬을 사용하면 안 됩니다)
 *
 * ▣ 입력 설명
 * 첫 번째 줄에 100 이하의 세 자연수가 입력된다.
 *
 * ▣ 출력 설명
 * 첫 번째 줄에 가장 작은 수를 출력한다.
 *
 * ▣ 입력 예제 1
 * 6 5 11
 *
 * ▣ 출력 예제 1
 * 5
 */

function solution(a, b, c) {
	return Math.min(a, b, c);
}

const input = [6, 5, 11];
const output = solution(...input);
console.log(output); // 5
