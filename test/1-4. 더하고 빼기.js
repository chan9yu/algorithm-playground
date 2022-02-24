//? 더하고 빼기
//* 각 자리의 숫자를 더한값을 원래 숫자에서 빼고
//* 결과가 하단에 나열한 과일코드가 나올때까지 계산하는 코드를 작성해주세요.

const solution = n => {
	let answer = ''
	let tmp = n
	const fruits = [
		{ kiwi: [1, 3, 24, 26, 47, 49, 68, 70, 91, 93] },
		{ pear: [2, 21, 23, 42, 44, 46, 65, 67, 69, 88] },
		{ banana: [4, 6, 25, 29, 48, 50, 71, 73, 92, 94, 96] },
		{ melon: [5, 7, 28, 30, 32, 51, 53, 74, 76, 95, 97] },
		{ pineapple: [8, 10, 12, 31, 33, 52, 56, 75, 77, 79, 98, 100] },
		{ apple: [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99] },
		{ cucumber: [11, 13, 34, 55, 57, 59, 78, 80] },
		{ orange: [14, 16, 35, 37, 39, 58, 60, 83] },
		{ grape: [15, 17, 19, 38, 40, 61, 82, 84, 86] },
		{ cherr: [20, 22, 41, 43, 62, 64, 66, 85, 87, 89] }
	]

	while (true) {
		let sum = 0
		tmp
			.toString()
			.split('')
			.forEach(e => {
				sum += Number(e)
			})
		tmp -= sum
		if (tmp <= 100) break
	}

	fruits.forEach(
		fruit =>
			Object.values(fruit)[0].indexOf(tmp) >= 0 &&
			(answer = Object.keys(fruit)[0])
	)

	return answer
}

console.log(solution(10)) //* return apple
console.log(solution(325)) //* return apple
