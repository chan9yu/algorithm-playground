//? 4. 후위식 연산(postfix)
//* 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
//* 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

function solution(s) {
	let answer
	let stack = []

	for (let v of s) {
		//memo 숫자는 스택에 넣어주며, 연산자를 만났다면 스택에 있는 값을 이용해 연산 후 다시 넣어준다.
		if (!isNaN(v)) stack.push(Number(v))
		else {
			let rt = stack.pop()
			let lt = stack.pop()
			if (v === '+') stack.push(lt + rt)
			else if (v === '-') stack.push(lt - rt)
			else if (v === '*') stack.push(lt * rt)
			else if (v === '/') stack.push(lt / rt)
		}
	}

	answer = stack[0]

	return answer
}

let str = '352+*9-'
console.log(solution(str))
