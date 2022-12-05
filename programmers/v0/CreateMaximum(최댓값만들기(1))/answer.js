function solution(numbers) {
  numbers = numbers
    .sort((a, b) => a - b)
    .reverse()
    .splice(0, 2);
  return numbers.reduce((a, b) => a * b);
}
