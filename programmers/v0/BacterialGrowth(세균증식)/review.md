세균 증식
https://school.programmers.co.kr/learn/courses/30/lessons/120910

문제 설명
어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10
1 ≤ t ≤ 15

풀이시간
9분

풀이 방법

1. n의 값을 \*2로 곱한값들을 배열에 담기
2. 마지막 배열의 값을 가져오기 위해 배열 반전
3. 첫버째 배열 출력

다른 방법
-- 제곱계산법
function solution(n, t) {
return n\*Math.pow(2,t);
}
