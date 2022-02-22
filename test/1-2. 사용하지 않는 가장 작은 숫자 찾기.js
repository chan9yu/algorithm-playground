//? 사용하지 않는 가장 작은 숫자 찾기
//* 0부터 시작하는 양수(+)인 ID가 있습니다.
//* 여러 ID를 보고 사용하지 않는 가장 작은 숫자를 찾는 함수를 작성해주세요.
//* - 정렬되지 않는 배열을 넣어도 동작해야함
//* - 중복된 숫자가 있는 경우도 동작해야함

const solution = ids => {
	let answer = []

	ids.sort((a, b) => a - b)
	ids[0] !== 0 && answer.push(0)

	for (let i = 1; i < ids.length; i++)
		ids[i] - ids[i - 1] !== 1 && answer.push(i)

	!answer.length && answer.push(ids.length)

	return Math.min(...answer)
}

let arr = [0, 1, 2, 4]
console.log(solution(arr)) //* return 3

arr = [0, 1, 2, 3, 4, 5, 6]
console.log(solution(arr)) //* reutrn 7

arr = [1, 1, 2, 3, 4, 6]
console.log(solution(arr)) //* reutrn 0
