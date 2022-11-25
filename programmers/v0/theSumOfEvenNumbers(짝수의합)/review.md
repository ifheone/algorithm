짝수의 합
https://school.programmers.co.kr/learn/courses/30/lessons/120831

문제 설명
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

제한사항
0 < n ≤ 1000

풀이시간
35분

풀이 방법

1. for문으로 숫자 출력
2. 짝수만 찾아서 더하기

다른 방법
function solution(n) {
var half = Math.floor(n/2);
return half\*(half+1);
}

function solution(n) {
var answer = 0;
for(let i=2 ; i<=n ; i+=2)
answer += i;
return answer;
}
