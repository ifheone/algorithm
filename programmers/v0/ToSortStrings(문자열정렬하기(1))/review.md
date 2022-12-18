문자열 정렬하기 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120850

문제 설명
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
my_string에는 숫자가 한 개 이상 포함되어 있습니다.
my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -

풀이시간
1시간 30분

풀이 방법

1. 문자열에서 정규식으로 replace를 통해 영문제거
2. split()를 사용해 배열로 만든 후 오름차순으로 정렬
3. 정렬된 값을 숫자로 변경하기 위해 map을 사용

다른 방법
function solution(my_string) {
return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}
