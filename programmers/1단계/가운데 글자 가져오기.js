//? 가운데 글자 가져오기
//* 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
//* 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
	let answer = ''
	let len = s.split('').length

	len % 2 === 1
		? (answer = s[parseInt(len / 2, 10)])
		: (answer = s[len / 2 - 1] + s[len / 2])

	return answer
}

console.log(solution('abcde')) //* return "c"
console.log(solution('qwer')) //* return "we"
