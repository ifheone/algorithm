두 수의 나눗셈
https://school.programmers.co.kr/learn/courses/30/lessons/120806

문제 설명
정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

제한사항
0 < num1 ≤ 100
0 < num2 ≤ 100

풀이시간
3분

다른 방법
function solution(num1, num2) {
return parseInt(num1 / num2 \* 1000);
}

const solution = (num1, num2) => Math.floor(num1 / num2 \* 1000)
