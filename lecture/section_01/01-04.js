/**
 * 1부터 N까지 합 출력하기
 *
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 *
 * ▣ 입력 설명
 * 첫 번째 줄에 20 이하의 자연수 N이 입력된다.
 *
 * ▣ 출력 설명
 * 첫 번째 줄에 1부터 N까지의 합을 출력한다.
 *
 * ▣ 입력 예제 1
 * 6
 *
 * ▣ 출력 예제 1
 * 21
 *
 * ▣ 입력 예제 2
 * 10
 *
 * ▣ 출력 예제 2
 * 55
 */

function solution(n) {
	return (n * (n + 1)) / 2;
}

const input1 = 6;
const output1 = solution(input1);
console.log(output1); // 21

const input2 = 10;
const output2 = solution(input2);
console.log(output2); // 55
