function solution(my_string) {
  let answer = my_string
    .replace(/[a-z]/gi, "")
    .split("")
    .sort((a, b) => a - b);
  answer = answer.map((ele) => {
    return parseInt(ele, 10);
  });
  return answer;
}
