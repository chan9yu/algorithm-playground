//? 재귀함수
//* 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

function solution(n) {
	let answer = ''

	function DFS(L) {
		if (L === 0) return
		DFS(L - 1)
		answer += `${L.toString()} `
	}

	DFS(n)

	return answer
}

console.log(solution(3)) //* reutrn 1 2 3
