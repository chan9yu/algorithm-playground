//? 승점구하기
//* 점수를 보고 이기면 3점, 비기면 1점, 지면 0점으로
//* 계산하여 전체 승점을 구하는 함수를 작성해주세요.

const solution = games => {
	let score = 0

	games.forEach(e => {
		let lt = Number(e.split(':')[0])
		let rt = Number(e.split(':')[1])

		lt > rt && (score += 3)
		lt === rt && (score += 1)
	})

	return score
}

let arr = ['3:1', '2:2', '1:3']
console.log(solution(arr)) //* return 4

arr = ['4:3', '3:2', '2:1']
console.log(solution(arr)) //* return 9

arr = ['4:4', '2:2', '3:3', '1:4', '1:2', '1:3', '4:3', '3:2', '2:1', '1:2']
console.log(solution(arr)) //* return 3

arr = ['1:4', '1:2', '1:3', '1:4', '1:2', '1:3', '1:4', '1:2', '1:3', '1:4']
console.log(solution(arr)) //* return 0
