정수 부분
https://school.programmers.co.kr/learn/courses/30/lessons/181850

문제 설명
실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ flo ≤ 100

풀이시간
1분

풀이 방법

1. parseInt()메서드를 이용하여 처리

다른 방법
function solution(flo) {
var answer = Math.trunc(flo);  
 return answer;
}
