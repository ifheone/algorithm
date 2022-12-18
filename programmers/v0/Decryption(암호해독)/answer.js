function solution(cipher, code) {
  var answer = [...cipher].filter((a, i) => (i + 1) % code === 0).join("");
  return answer;
}
