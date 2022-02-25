//? 이진트리 순회(깊이우선탐색)
//* 이진트리를 전위순회와 후위순회를 연습해보세요.

function solution(v) {
	let answer = ''

	function DFS(n) {
		if (n > 7) return
		//memo 전위순회
		//* answer += n
		DFS(n * 2) //memo 왼쪽 자식 방향
		//memo 중위순회
		//* answer += n
		DFS(n * 2 + 1) //memo 오른쪽 자식 방향
		//memo 후위순회
		answer += n
	}

	DFS(v)

	return answer
}

console.log(solution(1))
