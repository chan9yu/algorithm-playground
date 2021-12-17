// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let input = fs.readFileSync("text.txt").toString().split(" ");
let num1 = Number(input[0]);
let num2 = Number(input[1]);

console.log(num1 + num2);
