최댓값 만들기 (2)
https://school.programmers.co.kr/learn/courses/30/lessons/120862

문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers 의 길이 ≤ 100

풀이시간
2시간

풀이 방법

1. 배열값을 내림차순으로 정렬
2. [0]\*[1] 값과 마지막 배열2개의 곱한값을 비교하여 출력

원래 하려고 했던 방법
function solution(numbers) {
var answer;
answer = numbers.map( (e, i, t) => {
return [...t].map( (ele) => {
if( e !== ele){
return Number(e\*ele)
}
}).filter(ele2 => ele2)
})
return answer.flat(1).sort( (a,b) => a-b).at(-1);
}

다른 방법
function solution(numbers) {
var answer = [];
for(let i = 0; i < numbers.length - 1; i++){
for(let j = i + 1; j < numbers.length; j++){
answer.push(numbers[i] \* numbers[j]);
}
}
return Math.max(...answer);
}

//Best
function solution(numbers) {
numbers.sort((a, b) => a - b);
return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}
