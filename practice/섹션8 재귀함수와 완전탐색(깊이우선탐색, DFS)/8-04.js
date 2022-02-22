//? 부분집합 구하기(DFS)
//* 자연수 N이 주어지면 1부터 N까지의 원소를 갖는
//* 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.

function solution(n) {
	let answer = []
	let ch = Array.from({ length: n + 1 }).fill(0)

	function DFS(v) {
		if (v === n + 1) {
			let tmp = ''
			for (let i = 1; i <= n; i++) ch[i] === 1 && (tmp += i + ' ')
			tmp.length > 0 && answer.push(tmp.trim())
		} else {
			ch[v] = 1
			DFS(v + 1)
			ch[v] = 0
			DFS(v + 1)
		}
	}

	DFS(1)

	return answer
}

console.log(solution(3))
