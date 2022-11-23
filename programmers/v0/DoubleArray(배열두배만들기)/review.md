배열 두 배 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/120809

문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
1 ≤ numbers의 길이 ≤ 1,000

풀이시간
3분

다른 방법
--- reduce 사용
function solution(numbers) {
return numbers.reduce((a, b) => [...a, b * 2], []);
}

--- map 사용
const solution = (numbers) => numbers.map((number) => number \* 2)

--- map 사용
function solution(numbers) {
return numbers.map(i=>i\*2);
}

--- push 사용
function solution(numbers) {
const results = [];

    numbers.map((item) => {
        results.push(item*2);
    })

    return results;

}
