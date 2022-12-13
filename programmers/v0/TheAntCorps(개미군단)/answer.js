function solution(hp) {
  var answer = 0;
  let bigPlus = parseInt(hp / 5);
  let bigNumber = hp % 5;
  let middlePlus = parseInt(bigNumber / 3);
  let smallPlus = bigNumber % 3;
  return bigPlus + middlePlus + smallPlus;
}
