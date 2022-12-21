function solution(rsp) {
  var answer = "";
  answer = [...rsp].map((ele) => {
    if (ele === "0") {
      return (answer = 5);
    } else if (ele === "2") {
      return (answer = 0);
    } else if (ele === "5") {
      return (answer = 2);
    }
  });
  return answer.join("");
}
