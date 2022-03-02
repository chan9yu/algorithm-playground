//? 7. 아나그램(해쉬)
//* Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만
//* 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
//* 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만
//* 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
//* 즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
//* 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요.
//* 아나그램 판별시 대소문자가 구분됩니다.

function solution(str1, str2) {
	let answer = 'Yes'
	let sH = new Map()

	//memo str1 배열을 Hash Map으로 만들고
	for (let v of str1) sH.has(v) ? sH.set(v, sH.get(v) + 1) : sH.set(v, 1)

	//memo str2 배열을 탐색해서 key val 가 같은지 확인
	for (let v of str2) {
		if (!sH.has(v) || sH.get(v) === 0) return 'No'
		sH.set(v, sH.get(v) - 1)
	}

	return answer
}

console.log(solution('AbaAeCe', 'baeeACA'))
console.log(solution('abaCC', 'Caaab'))
