문자열 뒤집기
https://school.programmers.co.kr/learn/courses/30/lessons/120822

문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000

풀이시간
10분

풀이 방법

1. 문자열을 배열로 만듦
2. 배열을 reverse()를 이용하여 배열 뒤집기
3. 뒤집은 배열을 join()을 이용하여 문자열로 변환

다른 방법
function solution(my_string) {
return my_string.split('').reverse().join('');
}
