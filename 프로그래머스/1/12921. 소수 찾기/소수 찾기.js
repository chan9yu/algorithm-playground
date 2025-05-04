function solution(n) {
	const sieve = Array(n + 1).fill(true).fill(false, 0, 2);

	for (let i = 2; i <= Number(Math.sqrt(n)); i++) {
		if (sieve[i]) {
			for (let j = i * i; j <= n; j += i) {
				sieve[j] = false;
			}
		}
	}

	return sieve.filter(Boolean).length;
}