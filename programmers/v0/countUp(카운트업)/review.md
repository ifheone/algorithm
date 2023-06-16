카운트 업
https://school.programmers.co.kr/learn/courses/30/lessons/181920

문제 설명
정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ start ≤ end ≤ 50

풀이시간
25분

풀이 방법

1. for문으로 시작점과 끝점을 체크후 push()로 배열에 담아 출력

다른 방법
function solution(start, end) {
idx = start;
return Array.from({length: end-start+1}, ()=> {return start++});
}

function solution(start, end) {
return new Array(end - start + 1).fill().map((\_, i) => i + start);
}
