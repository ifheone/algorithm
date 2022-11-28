function solution(num_list) {
  var answer = [];
  let odd = [];
  let even = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      odd.push(i);
    } else {
      even.push(i);
    }
  }
  let oddLength = odd.length;
  let evenLength = even.length;
  answer.push(oddLength);
  answer.push(evenLength);
  return answer;
}
