피자 나눠 먹기 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120814

문제 설명
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

제한사항
1 ≤ n ≤ 100

풀이시간
10분

풀이 방법

1. 7과 같거나 이하면 무조건 1판
2. 7로 나눈후 소수점이 있다면 소수점은 올림 처리

다른 방법
function solution(n) {
return Math.ceil(n / 7)
}
