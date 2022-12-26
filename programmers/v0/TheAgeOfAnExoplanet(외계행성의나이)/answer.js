function solution(age) {
  var answer = "";
  let en = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  answer = String(age)
    .split("")
    .map((e, i) => {
      return en[e];
    })
    .join("");
  return answer;
}
