function solution(my_string, target) {
  var answer = 0;
  answer = my_string.indexOf(target);
  return answer === -1 ? 0 : 1;
}
