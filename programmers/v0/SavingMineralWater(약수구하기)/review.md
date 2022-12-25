약수 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/120897

문제 설명
1 ≤ n ≤ 10,000

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 영어 대문자와 소문자로만 구성되어 있습니다.

풀이시간
23분

풀이 방법

1. for문으로 나머지가 0인 값을 구함

다른 방법
function solution(n) {
return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}
