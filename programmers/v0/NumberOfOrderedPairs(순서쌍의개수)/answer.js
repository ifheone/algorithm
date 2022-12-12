function solution(n) {
  var answer = 0;
  let index = 1;
  for (let i = 1; i <= n; i++) {
    while (index <= n) {
      if (n % index === 0) {
        answer++;
      }
      index += 1;
    }
  }
  return answer;
}
