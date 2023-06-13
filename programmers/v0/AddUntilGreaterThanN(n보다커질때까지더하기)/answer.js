function solution(numbers, n) {
  const answer = numbers.reduce((a, c) => {
    if (a > n) {
      return a;
    }
    return (a += c);
  });
  return answer;
}
