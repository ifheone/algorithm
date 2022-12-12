모음 제거
https://school.programmers.co.kr/learn/courses/30/lessons/120849

문제 설명
영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
my_string은 소문자와 공백으로 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000

풀이시간
10분

풀이 방법

1. my_string값을 배열로 만듦
2. 모음을 배열로 하나 만듦
3. 두개를 비교한 후 문자열로 변환

다른 방법
--정규식
function solution(my_string) {
return my_string.replace(/[aeiou]/g, '');
}

function solution(my_string) {
return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}
