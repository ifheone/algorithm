배열 뒤집기
https://school.programmers.co.kr/learn/courses/30/lessons/120821

문제 설명
정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ num_list의 길이 ≤ 1,000
0 ≤ num_list의 원소 ≤ 1,000

풀이시간
15분

풀이 방법

1. 배열값을 reverse()를 이용하여 순서 뒤집기

다른 방법
function solution(num_list) {
return num_list.reverse()
}

function solution(num_list) {
var answer = [];
var j = num_list.length
for(var i = 1; i <= j; i++){
answer.push(num_list[j-i])
}
return answer;
}
