function solution(numbers) {
  var answer = 0;
  const n = numbers.reduce((a, b) => {
    return a + b;
  });
  return n / numbers.length;
}
