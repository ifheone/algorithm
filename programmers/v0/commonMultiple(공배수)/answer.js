function solution(number, n, m) {
  if (number % n == 0 && number % m == 0) {
    return (answer = 1);
  } else {
    return (answer = 0);
  }
  return answer;
}
