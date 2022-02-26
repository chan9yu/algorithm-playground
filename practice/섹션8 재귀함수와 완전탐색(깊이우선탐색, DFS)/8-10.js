//? 순열 구하기
//* 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

function solution(m, arr) {
	let answer = []
	let n = arr.length
	let checkArr = Array.from({ length: n }).fill(0)
	let tmp = Array.from({ length: m }).fill(0)

	function DFS(L) {
		if (L === m) answer.push([...tmp])
		else {
			for (let i = 0; i < n; i++) {
				if (checkArr[i] === 0) {
					checkArr[i] = 1
					tmp[L] = arr[i]
					DFS(L + 1)
					checkArr[i] = 0
				}
			}
		}
	}

	DFS(0)
	return answer
}

let arr = [3, 6, 9]
console.log(solution(2, arr))
