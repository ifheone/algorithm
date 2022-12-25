function solution(numbers, direction) {
  var answer = numbers;
  if (direction === "right") {
    let n = numbers.pop();
    numbers.unshift(n);
  } else {
    let n = numbers.shift();
    numbers.push(n);
  }
  return answer;
}
