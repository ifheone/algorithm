function solution(s1, s2) {
  var answer = 0;
  answer = s1.filter((ele) => {
    return s2.includes(ele);
  });
  return answer.length;
}
