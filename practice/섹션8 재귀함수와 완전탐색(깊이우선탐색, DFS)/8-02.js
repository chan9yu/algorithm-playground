//? 재귀함수를 이용한 이진수 출력
//*  10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요.
//* 단 재귀함수를 이용 해서 출력해야 합니다.

function solution(number) {
	let answer = ''

	function DFS(L) {
		if (L === 0) return
		DFS(parseInt(L / 2, 10))
		answer += `${(L % 2).toString()}`
	}

	DFS(number)
	return answer
}

console.log(solution(11)) //* 1011
