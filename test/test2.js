//* 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때,
//* 나머지 한 점의 좌표를 구하려고 합니다.
//* 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때,
//* 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를
//* return 하도록 solution 함수를 완성해주세요.
//* 단, 직사각형의 각 변은 x축, y축에 평행하며,
//* 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.

function solution(v) {
	let answer = []
	let x = {}
	let y = {}

	v.forEach(item => {
		//* x 좌표와 y 좌표 각각 변수에 저장
		x[item[0]] ? (x[item[0]] += 1) : (x[item[0]] = 1)
		y[item[1]] ? (y[item[1]] += 1) : (y[item[1]] = 1)
	})

	//* 값이 1인 그 좌표가 나머지 좌표를 의미
	Object.entries(x).forEach(
		([key, val]) => val === 1 && answer.push(parseInt(key, 10))
	)

	Object.entries(y).forEach(
		([key, val]) => val === 1 && answer.push(parseInt(key, 10))
	)

	return answer
}

let arr = [
	[1, 4],
	[3, 4],
	[3, 10]
]
console.log(solution(arr)) //* return [1, 10]

arr = [
	[1, 1],
	[2, 2],
	[1, 2]
]
console.log(solution(arr)) //* return [2, 1]
