//? 5. 최솟값 구하기
//* 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력

function solution(arr) {
	let answer = Number.MAX_SAFE_INTEGER
	for (let v of arr) answer > v && (answer = v)

	return answer
}

let arr = [5, 7, 1, 3, 2, 9, 11]
console.log(solution(arr))
