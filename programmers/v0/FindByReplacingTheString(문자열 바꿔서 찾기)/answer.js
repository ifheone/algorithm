function solution(myString, pat) {
  let text = myString.split("");
  let result = [];
  text.map((a) => {
    if (a === "A") {
      result.push("B");
    } else {
      result.push("A");
    }
  });
  return result.join("").includes(pat) ? 1 : 0;
}
