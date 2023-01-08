문자열 정렬하기 (2)
https://school.programmers.co.kr/learn/courses/30/lessons/120911

문제 설명
영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < my_string 길이 < 100

풀이시간
10분

풀이 방법

1. 문자열을 소문자로 변환 후 배열로 변경
2. sort()메서드를 통해 정렬 후 문자열로 변경

my_string.toLowerCase().split("").sort().join("");

다른 방법
function solution(s) {
return [...s.toLowerCase()].sort().join('')
}
