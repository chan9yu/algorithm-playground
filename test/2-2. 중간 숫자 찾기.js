//? 2. 중간 숫자 찾기
//* 3개의 숫자 중에 2번째 크기의 숫자 위치를 찾는 함수를 작성해주세요.

const solution = numbers => {
	const tmp = [...numbers].sort((a, b) => a - b)

	return numbers.indexOf(tmp[1])
}

let arr = [0, 1, 2]
console.log(solution(arr)) //* return 1

arr = [5, 1, 2]
console.log(solution(arr)) //* return 2

arr = [2, 1, 4]
console.log(solution(arr)) //* return 0

arr = [0, 4, 2]
console.log(solution(arr)) //* return 2
