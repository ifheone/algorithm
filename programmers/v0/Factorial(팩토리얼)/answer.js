function solution(n) {
  var answer = 0;
  let sum = 1;
  let arr = [];
  for (var i = 1; i <= 10; i++) {
    sum = sum * i;
    arr.push(sum);
  }
  arr.filter((ele, i) => {
    if (ele <= n) {
      answer++;
    }
  });
  return answer;
}
