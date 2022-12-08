function solution(n) {
  var answer = String(n).split("");
  answer = answer.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
  return answer;
}
