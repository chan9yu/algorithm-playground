/**
 * 최빈값 찾기
 * Q. 다음과 같은 문자열을 입력받았을 때, 어떤 알파벳이 가장 많이 포함되어 있는지 반환하시오.
 * (단 최빈값을 가진 알파벳이 여러개일 경우 알파벳 순서가 가장 앞에 위치한 알파벳을 출력하시오)
 *
 * "hello my name is dingcodingco"
 */

function solution(string) {
	const alphabetOccurrenceArray = Array(26).fill(0);

	for (const char of string) {
		if (!/[a-z]/.test(char)) continue; // 알파벳이 아닌 경우 건너뛰기

		const arrIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
		alphabetOccurrenceArray[arrIndex]++;
	}

	let maxOccurrence = 0;
	let maxAlphabetIndex = 0;

	for (let index = 0; index < alphabetOccurrenceArray.length; index++) {
		const arrayOccurrence = alphabetOccurrenceArray[index];

		if (arrayOccurrence > maxOccurrence) {
			maxOccurrence = arrayOccurrence;
			maxAlphabetIndex = index;
		}
	}

	return String.fromCharCode(maxAlphabetIndex + 'a'.charCodeAt(0));
}

console.log('정답 = i 현재 풀이 값 =', solution('hello my name is dingcodingco'));
console.log('정답 = e 현재 풀이 값 =', solution('we love algorithm'));
console.log('정답 = b 현재 풀이 값 =', solution('best of best youtube'));
