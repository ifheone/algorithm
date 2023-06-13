최빈값 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/120812

문제 설명
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

제한사항
0 < array의 길이 < 100
0 ≤ array의 원소 < 1000

풀이시간(1시간40분 진행함)
분

풀이 방법

1. 같은 값 추출

- 새로운 배열을 만듦
  > 같은 값이 나오면 +1

다른 방법
--- Math.floor 사용
function solution(array) {
return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
