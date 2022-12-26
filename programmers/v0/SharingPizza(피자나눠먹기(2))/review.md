피자 나눠 먹기 (2)
https://school.programmers.co.kr/learn/courses/30/lessons/120815

문제 설명
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ n ≤ 100

풀이시간
10분

풀이 방법

1. for문을 사용하여 진행

다른 방법
const solution = (n) => {
let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6

}

function solution(n) {
let pizza = 1;
while (pizza \* 6 % n) {
pizza++;
}
return pizza;
}
