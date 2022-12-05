최댓값 만들기 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120847

문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100

풀이시간
9분

풀이 방법

1. 배열값을 오름차순 정렬 후 reverse()를 이용하여 순서 뒤집기
2. splice로 배열 첫번째, 두번째 값을 가져온 후 곱하기

다른 방법
function solution(numbers) {
numbers.sort((a,b)=>b-a);
return numbers[0]\*numbers[1];
}
