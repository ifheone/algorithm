function solution(my_string) {
  let arr = my_string.split("");
  let answer = arr
    .filter((ele, i) => {
      return arr.indexOf(ele) === i;
    })
    .join("");
  return answer;
}
