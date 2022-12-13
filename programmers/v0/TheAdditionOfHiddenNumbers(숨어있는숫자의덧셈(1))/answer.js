function solution(my_string) {
  var answer = 0;
  let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let array = my_string.split("");
  answer = array.filter((ele) => {
    return number.includes(ele);
  });
  answer = answer.reduce((a, b) => {
    return Number(a) + Number(b);
  });
  return answer;
}
