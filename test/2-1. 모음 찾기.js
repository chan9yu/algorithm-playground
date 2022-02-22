//? 모음 찾기
//* a, e, i, o, u가 몇개 들어 있는지 출력하는 함수를 작성해주세요.

const soultion = str => {
	let count = 0
	const arr = ['a', 'e', 'i', 'o', 'u']

	for (let v of str) {
		for (let x of arr) v === x && (count += 1)
	}

	return count
}

console.log(soultion('abracadabra')) //* return 5
