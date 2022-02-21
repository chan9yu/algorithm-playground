//? 나누어 떨어지는 숫자 배열
//* array의 각 element 중 divisor로 나누어 떨어지는 값을
//* 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
//* divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
	let answer = []

	arr.forEach(e => e % divisor === 0 && answer.push(e))
	answer.length === 0 && answer.push(-1)
	answer.sort((a, b) => a - b)

	return answer
}

let arr = [5, 9, 7, 10]
console.log(solution(arr, 5)) //* return [5, 10]

arr = [2, 36, 1, 3]
console.log(solution(arr, 1)) //* return 	[1, 2, 3, 36]

arr = [3, 2, 6]
console.log(solution(arr, 10)) //* return [-1]
