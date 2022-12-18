function solution(my_string) {
  var answer = "";
  answer = [...my_string]
    .map((ele) => {
      if (ele === ele.toLowerCase()) {
        return ele.toUpperCase();
      } else {
        return ele.toLowerCase();
      }
    })
    .join("");
  return answer;
}
