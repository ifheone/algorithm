아이스 아메리카노
https://school.programmers.co.kr/learn/courses/30/lessons/120821

문제 설명
머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < money ≤ 1,000,000

풀이시간
6분

풀이 방법

1. 배열 0번에 살 수 있는 커피 개수
2. 배열 1번에 총 돈 - 커피값\*배열0번

다른 방법
unction solution(money) {
return [Math.floor(money / 5500), money % 5500];
}
