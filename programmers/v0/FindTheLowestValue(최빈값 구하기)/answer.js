function solution(array) {
  const arraySort = array.sort(function (a, b) {
    return a - b;
  });
  const numberLength = array.length;
  const lengthCeil = Math.ceil(numberLength / 2);
  const answer = arraySort[lengthCeil - 1];
  return answer;
}
