function getGCD(a, b) {
	if (b === 0) {
		return a;
	}

	return getGCD(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
	const resultNum = numer1 * denom2 + numer2 * denom1;
	const resultDen = denom1 * denom2;
	const gcd = getGCD(resultNum, resultDen);

	return [resultNum / gcd, resultDen / gcd];
}