순서쌍의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120836

문제 설명
순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 1,000,000

풀이시간
1시간

풀이 방법

1. for문으로 나머지 값이 0이 되는 값을 추출

다른 방법
function solution(n) {
let ans = 0;
for (let i = 1; i < Math.sqrt(n); i++)
if (n%i === 0) ans+=2;

    return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;

}

function solution(n) {
var answer = 0;
for(let i = 0;i<=n;i++){
if(n % i === 0 ){
answer += 1
}
}
return answer;
}
