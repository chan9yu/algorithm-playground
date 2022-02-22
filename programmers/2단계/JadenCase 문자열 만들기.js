//? JadenCase 문자열 만들기
//* JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
//* 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(s) {
	let answer = ''

	const str = s.split(' ').map(e =>
		e
			.split('')
			.map((e, i) => {
				if (!isNaN(e)) return e
				return i === 0 ? e.toUpperCase() : e.toLowerCase()
			})
			.join('')
	)

	str.forEach((e, i) => {
		answer += e
		i !== str.length - 1 && (answer += ' ')
	})

	return answer
}

console.log(solution('3people unFollowed me')) //* return "3people Unfollowed Me"
console.log(solution('for the last week')) //* return "For The Last Week"
