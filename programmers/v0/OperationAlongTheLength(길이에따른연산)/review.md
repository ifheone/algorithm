길이에 따른 연산
https://school.programmers.co.kr/learn/courses/30/lessons/181879

문제 설명
정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 20
1 ≤ num_list의 원소 ≤ 9

풀이시간
3분

풀이 방법

1. reduce() 함수를 이용하여 해결

다른 방법
const solution=n=>n.reduce((a,v)=>n.length>10?a+v:a\*v)
