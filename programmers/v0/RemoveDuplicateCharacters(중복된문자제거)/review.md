중복된 문자 제거
https://school.programmers.co.kr/learn/courses/30/lessons/120888

문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ order ≤ 1,000,000

풀이시간
15분

풀이 방법

1. filter() 메서드를 사용하여 indexOf로 값 비교

다른 방법
function solution(my_string) {
return [...new Set(my_string)].join('');
}

function solution(my_string) {
let s = new Set(Array.from(my_string));
return [...s.values()].join('');
}

function solution(my_string) {
return [...new Set(my_string.split(""))].join("");
}
