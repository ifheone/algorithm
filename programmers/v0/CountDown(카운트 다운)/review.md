카운트 다운
https://school.programmers.co.kr/learn/courses/30/lessons/181899

문제 설명
정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ end_num ≤ start_num ≤ 50

풀이시간
10분

풀이 방법

1. for문을 이용하여 값을 계산 후 push로 배열에 추가

다른 방법
function solution(start, end) {
return Array.from(Array(start - end + 1), (\_, i) => start - i);
}

function solution(start, end) {
var answer = [];
do {
answer.push(start);
start--;
} while(start >= end)
return answer;
}
