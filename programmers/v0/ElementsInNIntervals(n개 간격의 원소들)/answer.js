function solution(num_list, n) {
  var answer = [];
  answer = num_list.filter((a, i) => {
    if (i % n === 0) {
      return a;
    }
  });
  return answer;
}
