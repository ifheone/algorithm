배열 만들기 1
https://school.programmers.co.kr/learn/courses/30/lessons/181901

문제 설명
정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ n ≤ 1,000,000
1 ≤ k ≤ min(1,000, n)

풀이시간
1분

풀이 방법

1. for문을 이용하여 숫자를 구하고 push로 배열에 넣음

다른 방법
const solution=(n,k)=>Array(~~(n/k)).fill(k).map((v,i)=>v\*(i+1))

function solution(n, k) {
var answer = [];
for(let i = k ; i <= n; i+=k){
answer.push(i)
}
return answer;
}
