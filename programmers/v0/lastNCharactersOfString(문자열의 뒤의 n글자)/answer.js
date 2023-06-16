function solution(my_string, n) {
  let answer = [];
  let stringArr = my_string.split("").reverse();
  for (let i = 0; i < n; i++) {
    answer.push(stringArr[i]);
  }
  return answer.reverse().join("");
}
