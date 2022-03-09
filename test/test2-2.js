//* 4방향으로 움직일 수 있는 로봇이 좌표평면의 원점에 서 있습니다.
//* 이 로봇에게 알파벳으로 명령을 내려 특정 방향으로 1칸만큼 이동을 시킬 수 있습니다.
//* 로봇은 4방향으로 움직일 수 있으며,
//* U는 위, L은 왼쪽, R은 오른쪽, D는 아래로 이동하라는 명령어입니다.
//* 로봇에게 명령을 하나의 문자열로 묶어서 내릴 수 있습니다.
//* 예를 들어, 로봇에게 다음과 같은 명령을 내렸다고 가정해 봅시다.

//* URLLDRLR

//* 로봇은
//* (0,0) → (0,1) → (1,1) → (0,1) → (-1,1) →
//* (-1,0) → (0,0) → (-1,0) → (0,0)
//* 의 순서로 이동하여 원점으로 돌아오게 됩니다.
//* 하지만 우리는 이 명령어 중 연속되는 일부 명령어만을 내려도
//* 원점으로 돌아오게 할 수 있습니다. 그 경우는 다음과 같습니다.

//* 명령어	명령어의 범위(a번째 문자열~b번째 문자열을 의미)
//*  RL	              [1,2]
//*  RL	              [5,6]
//*  LR	              [6,7]
//*  URLLDR	          [0,5]
//*  URLLDRLR	        [0,7] ※명령어 전체도 포함

//* 결론적으로 위의 명령어의 전체,
//* 또는 연속되는 일부 명령어 중 로봇이 출발하여
//* 시작지점으로 돌아오는 경우의 수는 5가지입니다.

//* 로봇의 명령어 s가 주어질 때,
//* 경우의 수를 return 하는 solution 함수를 완성해 주세요.

const solution = s => {
	let answer = 0
	let start = true
	const current = [0, 0]
	const moves = {
		U: [-1, 0],
		D: [1, 0],
		L: [0, -1],
		R: [0, 1]
	}

	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
			s[j] === 'U' || s[j] === 'D'
				? (current[0] -= moves[s[j]][0])
				: (current[1] -= moves[s[j]][1])

			!start && current[0] === 0 && current[1] === 0 && (answer += 1)
			start = false
		}
		start = true
		current[0] = 0
		current[1] = 0
	}

	return answer
}

console.log(solution('URLLDRLR')) //* return 5
console.log(solution('RLDU')) //* return 3
console.log(solution('URDLDRULDLRUDLU')) //* return 14
