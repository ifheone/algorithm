문자열의 뒤의 n글자
https://school.programmers.co.kr/learn/courses/30/lessons/181910?language=javascript

문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
my_string은 숫자와 알파벳으로 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000
1 ≤ n ≤ my_string의 길이

풀이시간
25분

풀이 방법

1. my_string의 매개변수를 배열로 바꾼 후 역순정렬
2. for문으로 answer값에 push로 넣어준 후
3. 배열을 다시 역순으로 돌리고 문자열로 변환

다른 방법
function solution(my_string, n) {
return my_string.substring(my_string.length - n);
}

function solution(my_string, n) {
var answer = my_string.slice(-1\*n);
return answer;
}
