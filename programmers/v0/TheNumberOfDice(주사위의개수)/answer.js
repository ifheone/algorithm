function solution(box, n) {
  var answer = 0;
  let number = [];
  answer = box.reduce((acc, cur) => {
    return number.push(cur / n);
  }, 0);
  answer = number.reduce((acc, cur) => {
    return acc * parseInt(cur);
  }, 1);
  return answer;
}
