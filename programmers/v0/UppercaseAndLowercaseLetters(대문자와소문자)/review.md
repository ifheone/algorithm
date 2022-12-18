대문자와 소문자
https://school.programmers.co.kr/learn/courses/30/lessons/120893

문제 설명
문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 영어 대문자와 소문자로만 구성되어 있습니다.

풀이시간
13분

풀이 방법

1. 문자열을 배열로 만든 후 대문자인지 소문자인지 판단 후 문자열로 다시 변경

다른 방법
function solution(my_string) {
var answer = '';
for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
return answer;
}
