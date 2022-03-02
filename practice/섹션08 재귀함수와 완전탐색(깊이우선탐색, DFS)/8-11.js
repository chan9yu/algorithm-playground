//? 팩토리얼
//* 자연수 N을 입력하면 N!값을 구하세요.
//* N! = n*(n-1)*(n-2)*.....*2*1입니다.
//* 만약 N=5라면 5!=5*4*3*2*1=120입니다.

function solution(n) {
	const DFS = n => (n === 1 ? 1 : n * DFS(n - 1))
	return DFS(n)
}

console.log(solution(5))
