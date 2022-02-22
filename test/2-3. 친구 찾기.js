//? 친구 찾기
//* 이름이 4글자면 친구입니다. 친구를 찾는 함수를 작성해주세요.

const solution = users => {
	let friends = []
	users.forEach(e => e.length === 4 && friends.push(e))

	return friends
}

let arr = ['Ryan', 'Kieran', 'Mark']
console.log(solution(arr)) //* return [ 'Ryan', 'Mark' ]

arr = ['aaaa', 'bb', 'ccc', 'dddd', 'eeee', 'fffff']
console.log(solution(arr)) //* return [ 'aaaa', 'dddd', 'eeee' ]
