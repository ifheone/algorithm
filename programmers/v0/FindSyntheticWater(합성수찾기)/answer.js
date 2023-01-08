function solution(n) {
  var answer = 0;
  let a = 4;
  let b = 1;
  while (a <= n) {
    let array = [];
    while (b <= a) {
      if (a % b === 0) {
        array.push(b);
      }
      b++;
    }
    a++;
    b = 1;
    if (array.length > 2) {
      answer++;
    }
  }
  return answer;
}
