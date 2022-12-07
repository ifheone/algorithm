function solution(my_string, letter) {
  var answer = "";
  answer = my_string.split("");
  answer = answer
    .filter((ele) => {
      return ele !== letter;
    })
    .join("");
  return answer;
}
