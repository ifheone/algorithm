n개 간격의 원소들
https://school.programmers.co.kr/learn/courses/30/lessons/181888

문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
5 ≤ num_list의 길이 ≤ 20
1 ≤ num_list의 원소 ≤ 9
1 ≤ n ≤ 4

풀이시간
5분

풀이 방법

1. filter를 이용하여 새로운 배열을 만듦
2. if문으로 나머지값을 0인 것들만 담아서 처리

다른 방법
const solution = (num*list, n) => num_list.filter((*, i) => !(i % n))

function solution(num*list, n) {
return num_list.filter((*, i) => i % n === 0);
}
