function solution(numbers) {
    let answer = Array.from({ length: 9 }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
    for (const num of numbers) {
        answer -= num
    }
    
    return answer;
}