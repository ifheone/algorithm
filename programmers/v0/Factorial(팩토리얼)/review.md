팩토리얼
https://school.programmers.co.kr/learn/courses/30/lessons/120848

문제 설명
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 _ 4 _ 3 _ 2 _ 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

제한사항
0 < n ≤ 3,628,800

풀이시간
1시간

풀이 방법

1. for문으로 10까지 곱한값을 배열에 담기
2. 배열에 담은 값을 filter 메서드를 사용하여 작은값 추출
3. 작은값 추출한 개수대로 answer값을 더해줌

다른 방법
function solution(n) {
let i = 1;
let f = 1;
while (f*i < n) f*=++i;
return i;
}
