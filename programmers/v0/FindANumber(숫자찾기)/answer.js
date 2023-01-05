function solution(num, k) {
  let array = String(num).split("").map(Number);
  let answer = array.findIndex((ele) => {
    return ele === k;
  });
  return answer === -1 ? -1 : answer + 1;
}
