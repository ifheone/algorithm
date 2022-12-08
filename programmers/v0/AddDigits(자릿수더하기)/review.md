자릿수 더하기
https://school.programmers.co.kr/learn/courses/30/lessons/120906

문제 설명
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

제한사항
0 ≤ n ≤ 1,000,000

풀이시간
10분

풀이 방법

1. 정수값을 문자열로 변경
2. reduce를 통해 모든 값 더하기
3. 초기값은 0으로 진행
   > reduce안에 Number로 형변한을 해줘서 초기값이 문자열로 들어와서 초기값이 없으면 에러뜸

다른 방법
function solution(n) {
return n
.toString()
.split("")
.reduce((acc, cur) => acc + Number(cur), 0);
}
