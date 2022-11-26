function solution(n) {
  var answer = [];
  let array;
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      array = i;
      answer.push(array);
    }
  }
  return answer;
}
