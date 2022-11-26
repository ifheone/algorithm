짝수는 싫어요
https://school.programmers.co.kr/learn/courses/30/lessons/120813

문제 설명
정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
0 < n ≤ 1000

풀이시간
10분

풀이 방법

1. for문으로 숫자 출력
2. 홀수만 찾아서 배열로 push

다른 방법
function solution(n) {
var answer = [];

    for (let i = 1; i<=n; i+=2) answer.push(i)

    return answer;

}
