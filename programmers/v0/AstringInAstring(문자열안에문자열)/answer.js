function solution(str1, str2) {
  let answer = str1.indexOf(str2);
  return answer === -1 ? 2 : 1;
}
