짝수 홀수 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120824

문제 설명
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ num_list의 길이 ≤ 100
0 ≤ num_list의 원소 ≤ 1,000

풀이시간
30분

풀이 방법

1. 문자열을 for문으로 홀수 짝수 나눔
2. 홀수, 짝수 나누고 배열의 개수 구함
3. push로 answer에 새로운 배열 추가

다른 방법
function solution(num_list) {
var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;

}

---filter 활용
function solution(num_list) {
return [
num_list.filter((num) => num % 2 === 0).length,
num_list.filter((num) => num % 2 === 1).length,
];
}

---for문 활용
function solution(num_list) {
var answer = [0, 0];

    for(let i = 0 ; i < num_list.length; i++){
        if(num_list[i] % 2 == 0) answer[0]++;
        else answer[1]++;
    }

    return answer;

}

---map 활용
function solution(num_list) {
const result = [];

    let Even = 0;
    let Odd = 0;

    num_list.map((item) => {
        if(item % 2 === 0) {
            Even += 1;
        } else {
            Odd += 1;
        }
    });

    result.push(Even);
    result.push(Odd);

    return result;

}
