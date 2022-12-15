function solution(n, numlist) {
  let answer = numlist.filter((ele) => {
    if (ele % n === 0) {
      return ele;
    }
  });
  return answer;
}
