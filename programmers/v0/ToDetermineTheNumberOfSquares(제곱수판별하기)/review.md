제곱수 판별하기
https://school.programmers.co.kr/learn/courses/30/lessons/120909

문제 설명
어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 1,000,000

풀이시간
10분

풀이 방법

1. while문으로 약수 구하기
2. 제곱수는 홀수, 제곱수가 아닌수는 짝수이므로 분기처리함

다른 방법
--Math.sqrt 메서드는 제곱근을 반환함
function solution(n) {
return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
