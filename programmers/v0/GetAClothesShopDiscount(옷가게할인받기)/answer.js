function solution(price) {
  var answer = 0;
  if (price >= 500000) {
    return parseInt(price * 0.8);
  } else if (price >= 300000) {
    return parseInt(price * 0.9);
  } else if (price >= 100000) {
    return parseInt(price * 0.95);
  } else {
    return price;
  }
  return answer;
}
