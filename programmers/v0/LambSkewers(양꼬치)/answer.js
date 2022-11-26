function solution(n, k) {
  var answer = 0;
  const lamb = 12000;
  const drink = 2000;
  let service;
  for (let i = 10; i <= n; i += 10) {
    service = i;
  }
  if (k > 1) {
    service = (service / 10) * drink;
    return lamb * n + drink * k - service;
  } else {
    return lamb * n + drink * k;
  }

  return answer;
}
