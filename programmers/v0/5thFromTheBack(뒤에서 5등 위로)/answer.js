function solution(num_list) {
  var answer = [];
  num_list.sort(function (a, b) {
    return a - b;
  });
  num_list.map((a, i) => {
    if (i > 4) {
      return answer.push(a);
    }
  });
  return answer;
}
