//* RPG 게임에 1부터 N까지 번호가 하나씩 붙은 스킬 N 종류가 있습니다.
//* 이때, 각 스킬을 배우는데 필요한 스킬 포인트를 정하려 합니다.

//* 스킬에는 다음과 같이 상위 스킬과 선행 스킬이라는 개념이 있습니다.

//* - 상위 스킬 : 어떤 스킬을 배웠을 때 배울 수 있는 바로 다음 스킬
//*   - 상위 스킬이 없는 최상위 스킬은 딱 하나만 있습니다.
//*   - 최상위 스킬을 제외한 모든 스킬은 상위 스킬을 하나씩 가지고 있습니다.
//* - 선행 스킬 : 어떤 스킬을 배우기 위해 먼저 배워야 하는 스킬
//*   - 선행 스킬이 없는 경우 스킬을 바로 배울 수 있습니다.
//*   - 선행 스킬을 모두 배워야 현재 스킬을 배울 수 있습니다.

//* 모든 스킬을 익히는데 필요한 스킬 포인트를 total_sp만큼으로 정했을 때,
//* 각 스킬에 필요한 스킬 포인트를 다음 규칙에 따라 정하려 합니다.

//* - 어떤 스킬을 익히는데 필요한 스킬 포인트는 선행 스킬을 익히는데 필요한 스킬 포인트의 합입니다.
//*   - 직접 연결된 선행 스킬의 포인트만 합하면 됩니다.
//* - 선행 스킬이 없는 스킬들을 익히는데 필요한 스킬 포인트는 모두 같습니다.

//* 총 스킬 포인트 total_sp, 각 스킬의 상위 스킬을 담고 있는 배열 skills가 주어질 때,
//* 각 스킬을 익히는데 필요한 스킬 포인트 배열을 return 하도록 solution 함수를 작성해주세요.

function solution(total_sp, skills) {
	let answer = []
	let topSkill
	let highSkills = []
	let rowSkills = []

	skills.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
	topSkill = skills[0][0]

	for (let i = 0; i < skills.length - 1; i++) {
		if (skills[i][1] === skills[i + 1][0]) {
			highSkills.push(skills[i][1])
		} else rowSkills.push(skills[i][1])
	}

	rowSkills.push(skills[skills.length - 1][1])

	return answer
}

let arr = [
	[1, 2],
	[1, 3],
	[3, 6],
	[3, 4],
	[3, 5]
]
console.log(solution(121, arr)) //* return [44, 11, 33, 11, 11, 11]
