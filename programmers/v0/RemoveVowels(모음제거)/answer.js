function solution(my_string) {
  var answer = "";
  let string = my_string.split("");
  let array = ["a", "e", "i", "o", "u"];
  answer = string.filter((ele) => {
    return !array.includes(ele);
  });
  return answer.join("");
}
