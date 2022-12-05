function solution(sides) {
  var answer = 0;
  answer = sides.sort(function (a, b) {
    return a - b;
  });
  if (answer[0] + answer[1] > answer[2]) {
    return 1;
  } else {
    return 2;
  }
  return answer;
}
