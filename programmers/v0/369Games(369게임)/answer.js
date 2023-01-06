function solution(order) {
  let answer = 0;
  let array = order.toString().split("").map(Number);
  answer = array.filter((ele) => {
    if (ele === 3) {
      return (answer += 1);
    } else if (ele === 6) {
      return (answer += 1);
    } else if (ele === 9) {
      return (answer += 1);
    } else {
      return;
    }
  });
  return answer.length;
}
