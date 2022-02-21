//? 자연수 뒤집어 배열로 만들기
//* 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
//* 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
	let answer = []
	let arr = n.toString().split('')

	for (let i = arr.length - 1; i >= 0; i--) answer.push(parseInt(arr[i], 10))

	return answer
}

console.log(solution(12345)) //* return [5,4,3,2,1]
