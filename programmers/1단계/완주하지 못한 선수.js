//? 완주하지 못한 선수
//* 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
//* 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

//* 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와
//* 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
//* 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

function solution(participant, completion) {
	let answer = ''
	let hash = new Map()

	participant.forEach(e =>
		hash.has(e) ? hash.set(e, hash.get(e) + 1) : hash.set(e, 1)
	)

	completion.forEach(e =>
		hash.get(e) === 1 ? hash.delete(e) : hash.set(e, hash.get(e) - 1)
	)

	for (let [key] of hash) answer += key

	return answer
}

let arr1 = ['leo', 'kiki', 'eden']
let arr2 = ['eden', 'kiki']
console.log(solution(arr1, arr2)) //* return "leo"

arr1 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa']
arr2 = ['josipa', 'filipa', 'marina', 'nikola']
console.log(solution(arr1, arr2)) //* return "leo"

arr1 = ['mislav', 'stanko', 'mislav', 'ana']
arr2 = ['stanko', 'ana', 'mislav']
console.log(solution(arr1, arr2)) //* return "mislav"
