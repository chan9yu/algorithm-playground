//? 1. 세 수 중 최솟값
//* 100 이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성

function solution(a, b, c) {
	let answer
	a < b ? (answer = a) : (answer = b)
	c < answer && (answer = c)

	return answer
}

console.log(solution(2, 5, 1))
console.log(solution(6, 5, 11))
console.log(solution(100, 9, 3))
