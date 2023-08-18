function solution(num_list) {
  let multiplication = num_list.reduce((a, c) => {
    return a * c;
  });
  let plus = num_list.reduce((a, c) => {
    return a + c;
  });
  return multiplication > plus * plus ? 0 : 1;
}
