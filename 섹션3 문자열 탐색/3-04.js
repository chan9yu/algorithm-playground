//? 4. 가장 짧은 문자거리
//* 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

function solution(s, t) {
	let answer = []
	let p = 1000

	//memo 오른쪽 진행
	for (let v of s) {
		v === t ? (p = 0) : (p += 1)
		answer.push(p)
	}

	p = 1000

	//memo 왼쪽 진행
	for (let i = s.length - 1; i >= 0; i--) {
		s[i] === t ? (p = 0) : (p += 1)
		answer[i] = Math.min(answer[i], p)
	}

	return answer
}

let str = 'teachermode'
console.log(solution(str, 'e'))
