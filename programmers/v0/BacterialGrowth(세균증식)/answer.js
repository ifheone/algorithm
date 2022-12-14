function solution(n, t) {
  var answer = [];
  for (let i = 0; t > i; i++) {
    answer.push((n *= 2));
  }
  return answer.reverse()[0];
}
