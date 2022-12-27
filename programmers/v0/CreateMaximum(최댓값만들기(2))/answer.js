function solution(numbers) {
  var answer = 0;
  const sortArr = numbers.sort((a, b) => b - a);
  const first = sortArr[0] * sortArr[1];
  const last = sortArr.at(-1) * sortArr.at(-2);
  if (first > last) {
    return first;
  } else {
    return last;
  }
}
