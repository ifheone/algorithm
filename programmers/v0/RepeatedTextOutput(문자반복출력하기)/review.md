문자 반복 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/120825

문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

제한사항
2 ≤ my_string 길이 ≤ 5
2 ≤ n ≤ 10
"my_string"은 영어 대소문자로 이루어져 있습니다.

풀이시간
30분

풀이 방법

1. 문자열 나누기
2. map을 통해 새로운 배열을 만들기
3. for문을 통해 배열에 값 넣기
4. join으로 문자열 합치기

다른 방법
function solution(my_string, n) {
var answer = [...my_string].map(v => v.repeat(n)).join("");
return answer;
}

function solution(my_string, n) {
return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
}
