function solution(my_string, n) {
  var answer = "";
  let array = [];
  answer = my_string.split("");
  answer = answer.map((ele) => {
    for (let i = 0; n > i; i++) {
      array.push(ele);
    }
  });
  return array.join("");
}
