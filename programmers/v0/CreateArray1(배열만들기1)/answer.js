function solution(n, k) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    let number = i * k;
    if (number <= n) {
      answer.push(number);
    }
  }
  return answer;
}
