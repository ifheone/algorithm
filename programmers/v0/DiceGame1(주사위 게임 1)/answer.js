function solution(a, b) {
  var answer = 0;
  if (a % 2 !== 0 && b % 2 !== 0) {
    return a * a + b * b;
  }
  if (a % 2 !== 0 || b % 2 !== 0) {
    return 2 * (a + b);
  }
  if (a % 2 === 0 && b % 2 === 0) {
    return Math.abs(a - b);
  }
  return answer;
}
