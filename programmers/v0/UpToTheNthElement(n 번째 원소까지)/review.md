n 번째 원소까지
https://school.programmers.co.kr/learn/courses/30/lessons/181889

문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 30
1 ≤ num_list의 원소 ≤ 9
1 ≤ n ≤ num_list의 길이 \_\_\_

풀이시간
5분

풀이 방법

1. slice() 함수를 통해 배열로 만들어서 바로 값 도출

다른 방법
function solution(num_list, n) {
var answer = [];
for (let i=0; i<n; i++ ) {
answer.push(num_list[i]);
}
return answer;
}
