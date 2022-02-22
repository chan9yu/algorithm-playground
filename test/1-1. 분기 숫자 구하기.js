//? 분기 숫자 구하기
//* 1~12월중에 숫자를 입력받고 1분기, 2분기, 3분기, 4분기를 리턴하는 함수를 작성해주세요.

const solution = month => Math.ceil(month / 3)

console.log(solution(3)) //* return 1
console.log(solution(8)) //* return 3
console.log(solution(11)) //* return 4
