//? 11. 대문자 찾기
//* 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성

function solution(s) {
	let answer = 0
	for (let v of s) v === v.toUpperCase() && (answer += 1)

	return answer
}

let str = 'KoreaTimeGood'
console.log(solution(str))
