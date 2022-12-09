function solution(n) {
  var answer = 0;
  let index = 1;
  while (index <= n) {
    if (n % index === 0) {
      answer++;
    }
    index += 1;
  }
  return answer % 2 === 0 ? 2 : 1;
}
