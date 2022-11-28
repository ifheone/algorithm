배열 자르기
https://school.programmers.co.kr/learn/courses/30/lessons/120833

문제 설명
정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
2 ≤ numbers의 길이 ≤ 30
0 ≤ numbers의 원소 ≤ 1,000
0 ≤num1 < num2 < numbers의 길이

풀이시간
10분

풀이 방법

1. 배열값을 slice를 이용해 자르기

다른 방법
function solution(numbers, num1, num2) {
return numbers.splice(num1, num2-num1+1);
}

function solution(numbers, num1, num2) {
var answer = [];

    for (let i = num1; i < num2+1; i++) {
        answer.push(numbers[i])
    }

    return answer;

}
