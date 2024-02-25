/**
 * - 최대점수 구하기 (Knapsack 알고리즘)
 * 이번 정보 올림피아드 대회에서 좋은 성적을 내기 위하여
 * 현수는 선생님이 주신 N 개의 문제를 풀려고 한다.
 * 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 된다.
 * 제한 시간 M 안에 N 개의 문제 중 최대 점수를 얻을 수 있도록 해야 한다.
 *
 * 해당문제는 해당시간이 걸리면 푸는 걸로 간주한다.
 * 한 유형당 한개만 풀 수 있다.
 */

function solution(m, arr) {
	const dy = Array.from({ length: m + 1 }).fill(0);

	for (let i = 0; i < arr.length; i++) {
		const [ps, pt] = arr[i];

		for (let j = m; j >= pt; j--) {
			dy[j] = Math.max(dy[j], dy[j - pt] + ps);
		}
	}

	return dy[m];
}

/** [점수, 걸리는 시간] */
const arr = [
	[10, 5],
	[25, 12],
	[15, 8],
	[6, 3],
	[7, 4],
];
console.log(solution(20, arr)); // return 41
