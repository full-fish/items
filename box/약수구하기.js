//! 모두 반복
function solution(n) {
  const divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisors.push(i);
  }
  return divisors;
}

//! 절반까지만 순회
function solution(n) {
  const divisors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) divisors.push(i);
  }
  return [...divisors, n];
}

//! 제곱근 사용
function solution(n) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (n / i != i) divisors.push(n / i);
    }
  }
  divisors.sort((a, b) => a - b);
  return divisors;
}

//! 제곱근이 정수면 약수의 개수가 홀수이며
//! 정수가 아니면 약수의 개수가 짝수다
