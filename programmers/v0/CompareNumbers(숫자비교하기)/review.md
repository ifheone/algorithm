숫자 비교하기
https://school.programmers.co.kr/learn/courses/30/lessons/120807

문제 설명
정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ num1 ≤ 10,000
0 ≤ num2 ≤ 10,000

풀이시간
1분

다른 방법
function solution(num1, num2) {
var answer = num1 === num2 ? 1 : -1;
return answer;
}
