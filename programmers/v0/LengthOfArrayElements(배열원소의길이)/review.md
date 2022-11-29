배열 원소의 길이
https://school.programmers.co.kr/learn/courses/30/lessons/120854

문제 설명
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ strlist 원소의 길이 ≤ 100
strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

풀이시간
9분

풀이 방법

1. map을 이용하여 각 원소의 길이를 새로운 배열로 만듦

다른 방법
function solution(strlist) {
var answer = [];
for (let i = 0; i < strlist.length; i++) {
answer.push(strlist[i].length);
}
return answer;
}
