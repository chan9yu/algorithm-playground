//* N개의 수가 들어있는 배열 v가 있습니다.
//* 명령문 리스트 q가 주어질 때, [a, b, c] 가 주어진다면 먼저 a를 확인합니다.
//* a가 1이라면 v[b] 부터 v[c] 까지의 합을 반환합니다. (단, 배열은 0번지부터 시작합니다.)
//* a가 2라면 v[b]의 숫자를 c로 변경합니다.
//* 주어진 명령문을 모두 처리한 결과 리스트를 반환하는 함수를 완성해 주세요.

function solution(v, q) {
	let answer = []

	q.forEach(e => {
		if (e[0] === 1) {
			let sum = 0
			for (let i = e[1]; i <= e[2]; i++) sum += v[i]
			answer.push(sum)
		} else v[e[1]] = e[2]
	})

	return answer
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [
	[1, 2, 4],
	[2, 3, 8],
	[1, 2, 4]
]

console.log(solution(arr1, arr2)) //* return [12, 16]
