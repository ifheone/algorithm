특정 문자 제거하기
https://school.programmers.co.kr/learn/courses/30/lessons/120826

문제 설명
문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
letter은 길이가 1인 영문자입니다.
my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
대문자와 소문자를 구분합니다.

풀이시간
6분

풀이 방법

1. 문자열을 분리
2. filter를 이용하여 문자 제거
3. join()으로 합치기

다른 방법
--split의 인자를 기준으로 분리 -> 배열로 반환
function solution(my_string, letter) {
const answer = my_string.split(letter).join('')
return answer;
}

function solution(my_string, letter) {
return Array.from(my_string).filter(t => t !== letter).join('');
}
