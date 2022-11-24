중복된 숫자 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120583

문제 설명
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 1,000
0 ≤ n ≤ 1,000

풀이시간
3분

풀이 방법

1. filter를 사용하여 같은값만 추출하여 새로운 배열생성
2. 새로운 배열의 개수 추출

다른 방법
function solution(array, n) {
var answer = 0;
for(var i = 0; i < array.length; i++){
if(array[i] == n){
answer++
}
}
return answer;
}

function solution(array, n) {
var answer = 0;
let pos = 0;

    while(array.indexOf(n, pos) != -1) {
        answer++;
        pos = array.indexOf(n, pos) + 1;
    }

    return answer;

}
