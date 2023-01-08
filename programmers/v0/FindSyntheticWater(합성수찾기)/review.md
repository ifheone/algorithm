합성수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/120846

문제 설명
1 ≤ n ≤ 100

제한사항
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

풀이시간
23분

풀이 방법

1. 2중 while()문으로 처리 후 배열에 값을 담아서 결과 값 도출

다른 방법
function solution(n) {
return Array(n)
.fill()
.map((\_, i) => i + 1)
.filter((i) => {
let cnt = 0;
for (let j = 1; j <= i; j++) {
if (i % j === 0) cnt++;
}
return cnt >= 3;
}).length;
}
