369게임
https://school.programmers.co.kr/learn/courses/30/lessons/120891

문제 설명
머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ order ≤ 1,000,000

풀이시간
20분

풀이 방법

1. 정수값을 배열로 만든후 filter()메서드로 같은 값을 찾고 배열의 개수를 구함

다른 방법
function solution(order) {
return (''+order).split(/[369]/).length-1;
}

function solution(order) {
return Array.from(order.toString()).filter(t => ['3', '6', '9'].includes(t)).length;
}

function solution(order) {
return order.toString().split('').map(Number).reduce((acc,v)=>{
if(v !== 0 && v%3===0) acc++;
return acc;
},0);
}

function solution(order) {
return order
.toString()
.split("")
.filter((v) => v === "3" || v === "6" || v === "9").length;
}
