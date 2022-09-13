//? 3. 가위 바위 보
//* A, B 두 사람이 가위바위보 게임을 합니다.
//* 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
//* 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
//* 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 작성하세요.

const solution = (a, b) => {
  const res = [];

  for (let i = 0; i < a.length; i++) {
    switch (a[i] - b[i]) {
      case 0:
        res.push("D");
        break;
      case 1:
      case -2:
        res.push("A");
        break;
      case -1:
      case 2:
        res.push("B");
        break;
    }
  }

  return res;
};

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); // [A, B, A, B, D]
