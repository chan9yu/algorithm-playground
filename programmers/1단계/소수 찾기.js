//? 소수 찾기
//* 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
//* 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다. (1은 소수가 아닙니다.)

function solution(n) {
	let answer = [2]

	for (let i = 2; i < n + 1; i++) {
		let tmp = true

		for (let j = 0; j * j < i && j < answer.length; j++)
			if (i % answer[j] === 0) {
				tmp = false
				break
			}

		tmp && answer.push(i)
	}

	return answer.length
}

console.log(solution(10)) //* return 4
console.log(solution(5)) //* return 3
