배열의 평균값
https://school.programmers.co.kr/learn/courses/30/lessons/120817

문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 1,000
1 ≤ numbers의 길이 ≤ 100
정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

풀이시간
10분

풀이 방법

1. reduce 이용하여 배열 모든값 더하기
2. 주어진값 개수 확인하여 평균값 구함

다른 방법
function solution(numbers) {
var answer = 0;
for(i of numbers) {
answer += i
}
return answer / numbers.length;

}

function solution(numbers) {
let count = 0
for(let i = 0; i < numbers.length; i++) {
count = count + numbers[i] / numbers.length
}
return count
}
