//? 1. 올바른 괄호
//* 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
//* (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

function solution(s) {
	let answer = 'Yes'
	let stack = []

	for (let v of s) {
		//memo 여는 괄호는 스택배열에 추가
		if (v === '(') stack.push(v)
		else {
			//memo 닫는 괄호를 만날 때, 스택이 비어있는지 검사
			if (stack.length === 0) return 'No'
			stack.pop()
		}
	}
	//memo 모든 검사가 끝나고 스택배열에 값이 남아있는지 검사
	if (stack.length > 0) return 'No'
	return answer
}

console.log(solution('(())()'))
console.log(solution('(()()))'))
