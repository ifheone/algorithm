삼각형의 완성조건 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120889

문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
sides의 원소는 자연수입니다.
sides의 길이는 3입니다.
1 ≤ sides의 원소 ≤ 1,000

풀이시간
8분

풀이 방법

1. 배열값을 sort()를 이용하여 배열 오름차순으로 정리
2. 값 비교

다른 방법
--reduce 이용하여 정렬
function solution(sides) {
var answer = 0;
const max = Math.max(...sides);
const sum = sides.reduce((a,b) => a + b, 0) - max;

    answer = max < sum? 1 : 2;

    return answer;

}
