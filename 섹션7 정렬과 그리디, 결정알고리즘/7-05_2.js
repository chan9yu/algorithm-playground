// 5. Least Recently Used(카카오 캐시 문제 변형) - unshift, splice 사용

function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((e) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (e === answer[i]) pos = i;
    if (pos === -1) {
      answer.unshift(e);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(e);
    }
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
