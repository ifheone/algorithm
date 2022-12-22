function solution(array) {
  var answer = [];
  const number = Math.max(...array);
  const numberDepth = array.indexOf(number);
  answer.push(number, numberDepth);
  return answer;
}
