//? 아이큐 테스트
//* 홀수 또는 짝수중에 하나만 존재하는 값의 순번을 출력하는 함수를 작성해주세요.

const solution = numbers => {
	let numArr = numbers.split(' ')
	const odd = []
	const even = []

	numArr.forEach(e => (Number(e) % 2 ? odd.push(e) : even.push(e)))

	return numArr.indexOf(odd.length === 1 ? odd[0] : even[0]) + 1
}

console.log(solution('2 4 7 8 10')) //* return 3
console.log(solution('1 2 1 1')) //* return 2
console.log(solution('2 4 6 8 9 10')) //* return 5
console.log(solution('1 3 4 5 7 9')) //* return 3
