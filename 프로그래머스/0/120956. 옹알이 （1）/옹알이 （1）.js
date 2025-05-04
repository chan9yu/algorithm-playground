function solution(babbling) {
	let answer = 0;
	const sounds = ["aya", "ye", "woo", "ma"];

	for (const string of babbling) {
		let temp = string;
		let isSpeak = true;

		for (const sound of sounds) {
			if (temp.includes(sound + sound)) {
				isSpeak = false;
				break;
			}

			temp = temp.replaceAll(sound, " ");
		}

		if (isSpeak && temp.trim() === "") {
			answer += 1;
		}
	}

	return answer;
}
