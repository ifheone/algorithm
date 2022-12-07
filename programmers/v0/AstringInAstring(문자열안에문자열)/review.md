문자열안에 문자열
https://school.programmers.co.kr/learn/courses/30/lessons/120908

문제 설명
문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ str1의 길이 ≤ 100
1 ≤ str2의 길이 ≤ 100

풀이시간
15분

풀이 방법

1. indexOf로 매개변수 값이 있는지 체크

다른 방법
function solution(str1, str2) {
return str1.split(str2).length > 1 ? 1 : 2
}
