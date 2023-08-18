원소들의 곱과 합
https://school.programmers.co.kr/learn/courses/30/lessons/181929

문제 설명
정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9

풀이시간
10분

풀이 방법

1. reduce를 이용하여 곱, 합 결과값 도출하여 삼항으로 처리

다른 방법
function solution(num_list) {
let accMul = 1
let accSum = 0
for (const num of num_list) {
accMul \*= num
accSum += num
}
return accMul < accSum \*\* 2 ? 1 : 0
}
