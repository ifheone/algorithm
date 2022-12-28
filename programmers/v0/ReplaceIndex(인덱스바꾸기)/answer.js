function solution(my_string, num1, num2) {
  var answer = [...my_string];
  let array1 = answer[num1];
  answer[num1] = answer[num2];
  answer[num2] = array1;
  return answer.join("");
}
