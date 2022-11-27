function solution(array, height) {
  var answer = 0;
  answer = array.filter((item) => {
    return item > height;
  });
  return answer.length;
}
