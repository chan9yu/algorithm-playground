/**
 * - 돌다리 건너기
 * 철수는 학교에 가는데 개울을 만났다.
 * 개울은 N개의 돌로 다리를 만들어 놓았다.
 * 철수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 돌다리를 건널 수 있다.
 * 철수가 개울을 건너는 방법은 몇 가지인가?
 */

function solution(n) {
	const dy = Array.from({ length: n + 2 }).fill(0);

	dy[1] = 1;
	dy[2] = 2;

	for (let i = 3; i <= n + 1; i++) {
		dy[i] = dy[i - 2] + dy[i - 1];
	}

	return dy[n + 1];
}

console.log(solution(7)); // return 34
