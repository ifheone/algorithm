가장 큰 수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/120899

문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다.

풀이시간
30분

풀이 방법

1. Math.max(...)으로 배열에서 최대값 추출
2. indexOf()메서드로 배열에 몇번째 있는지 찾기

다른 방법
function solution(array) {
return [Math.max(...array), array.indexOf(Math.max(...array))]
}
