두 수의 곱
https://school.programmers.co.kr/learn/courses/30/lessons/120804

풀이시간
1분 이하

다른 방법
//for문으로 진행
function solution(num1, num2) {
var ans = 0;

    for (let i = 1; i <= num1; i++){
        for (let j = 1; j <= num2; j++){
            ans = ans + 1;
        }
    }

    return ans;

}
