//? 2. 경로 탐색(인접리스트)
//* 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는
//* 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
//* 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는
//* 12345
//* 125
//* 13425
//* 1345
//* 1425
//* 145
//* 총 6가지입니다.

function solution(n, arr) {
	let answer = 0
	let graph = Array.from(Array(n + 1), () => Array())
	let checkArr = Array.from({ length: n + 1 }).fill(0)

	//memo 인접리스트 만들기
	for (let [a, b] of arr) graph[a].push(b)

	function DFS(v) {
		if (v === n) answer += 1
		else {
			for (let i = 0; i <= graph[v].length; i++) {
				if (checkArr[graph[v][i]] === 0) {
					checkArr[graph[v][i]] = 1
					DFS(graph[v][i])
					checkArr[graph[v][i]] = 0
				}
			}
		}
	}

	checkArr[1] = 1
	DFS(1)
	return answer
}

let arr = [
	[1, 2],
	[1, 3],
	[1, 4],
	[2, 1],
	[2, 3],
	[2, 5],
	[3, 4],
	[4, 2],
	[4, 5]
]
console.log(solution(5, arr)) //* return 6
