숨어있는 숫자의 덧셈 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120851

문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

풀이시간
15분

풀이 방법

1. 문자열을 배열로 변경
2. 0~9까지 있는 새로운 배열 생성
3. 두 배열을 비교하여 숫자만 출력
4. 출력한 숫자를 더하기 하여 완료

다른 방법
function solution(my_string) {
const answer = my_string.replace(/[^0-9]/g, '')
.split('')
.reduce((acc, curr) => acc + Number(curr), 0);
return answer;
}

function solution(my_string) {
return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a)+parseInt(b));
}
