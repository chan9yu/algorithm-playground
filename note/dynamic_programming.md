# 동적계획법(DP, Dynamic Programming)

`동적계획법(DP, Dynamic Programming)`는 복잡한 문제를 더 작은 하위 문제로 나누어 해결하는 알고리즘 설계 기법입니다.

<br />

## DP와 재귀적 호출의 차이점은?

### top-down 접근 vs bottom-up 접근

재귀적 호출은 주로 `하양식(top-down) 접근 방식`을 사용합니다.
<br />
즉, 큰 문제를 작은 하위 문제로 나우어 해결하는 방식입니다.
<br />

동적 계획법은 주로 `상향식(bottom-up) 접근 방식`을 사용합니다.
<br />
작은 하위 문제들부터 시작하여 그 결과를 저장하고, 이를 이용해 점진적으로 큰 문제의 값을 구해나갑니다.

<br />

### 메모이제이션(Memoization)

동적 계획법은 중복되는 계산 결과를 저장하는 메모리 기법인 `메모이제이션`을 사용합니다.
<br />
이를 통해 이전에 계산한 값을 캐시하고, 다시 필요할 때 해당 값을 가져와 재사용합니다.
<br />
이는 재귀적 호출에서의 중복 계산을 방지하고 계산 속도를 향상시킵니다.

> 메모이제이션
>
> - 동적 계획법에서 중복 계산을 방지하는 기법
> - 이전에 계산된 결과를 저장하고 재사용
> - 재귀 호출의 효율성을 크게 향상

<br />

## DP 기법을 적용시킬 수 있는 조건

1. 중복되는 부분 문제(Overlapping Subproblems)
   <br />
   DP는 기본적으로 문제를 나누고 그 문제의 결과 값을 재활용해서 전체 답을 구합니다.
   <br />
   그래서 동일한 작은 문제들이 반복하여 나타나는 경우에 사용이 가능합니다.

2. 최적 부분 구조(Optimal Substructure)
   <br />
   부분 문제의 최적 결과 값을 사용해 전체 문제의 최적 결과를 도출 할 수 있는 경우 사용이 가능합니다.

<br />

## DP 기법의 장단점

장점

- 중복 계산을 줄일 수 있습니다.
- 효율적인 시간 복잡도를 가질 수 있습니다.
- 다양한 문제에 적용 가능합니다.

단점

- 메모리 사용량이 큽니다.
- DP는 중간 결과를 저장하기 위해 추가적인 메모리를 사용합니다.
- 따라서 문제의 크기가 커질수록 필요한 메모리도 증가할 수 있습니다.
- 문제 해석 및 점화식 도출의 어려움이 있습니다.

<br />

## DP 기법 활용 예시

- 피보나치 수열 계산
- 최단 경로 찾기 (플로이드-워셜 알고리즘)
- 동전 교환 문제

<br />

## 결론

- DP 기법은 재귀 호출의 단점을 보완하고 효율성을 높이는 강력한 알고리즘 설계 기법
- 다양한 문제에 적용 가능하며, 적절한 활용 시 뛰어난 성능을 발휘
