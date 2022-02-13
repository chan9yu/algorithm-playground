//? 8. 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
//* S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
//* 아나그램 판별시 대소문자가 구분됩니다.
//* 부분문자열은 연속된 문자열이어야 합니다.

function compareMaps(map1, map2) {
	//memo 키 종류가 다른지 검사
	if (map1.size !== map2.size) return false
	for (let [key, val] of map1) {
		//memo map1에 있는 key가 map2에 있는지 또는 값이 서로 다른지 검사
		if (!map2.has(key) || map2.get(key) !== val) return false
	}
	return true
}

function solution(s, t) {
	let answer = 0
	let tH = new Map()
	let sH = new Map()

	for (let v of t) tH.has(v) ? tH.set(v, tH.get(v) + 1) : tH.set(v, 1)

	let len = t.length - 1
	for (let i = 0; i < len; i++) {
		sH.has(s[i]) ? sH.set(s[i], sH.get(s[i]) + 1) : sH.set(s[i], 1)
	}

	//memo 투포인터 & 슬라이딩 윈도우 (1. 추가 2. 비교 3. lt가 참조 중인 값 제거 후 1증가)
	let lt = 0
	for (let rt = len; rt < s.length; rt++) {
		//memo 1. 추가
		sH.has(s[rt]) ? sH.set(s[rt], sH.get(s[rt]) + 1) : sH.set(s[rt], 1)
		//memo 2. 비교
		if (compareMaps(sH, tH)) answer += 1
		//memo 3. lt가 참조 중인 값 제거 후 1증가
		sH.set(s[lt], sH.get(s[lt]) - 1) //* 값 1 감소 후,
		sH.get(s[lt]) === 0 && sH.delete(s[lt]) //* 해당 키의 값이 0이면 delete
		lt += 1 //* 제거 후 lt 1증가
	}

	return answer
}

let a = 'bacaAacba'
let b = 'abc'
console.log(solution(a, b))
