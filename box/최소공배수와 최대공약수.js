//! 1씩 늘리는 기본 방법
function solution(arr) {
  let answer = 0;
  let i = Math.max(...arr);
  while (true) {
    if (arr.every((ele) => i % ele === 0)) {
      answer = i;
      break;
    }
    i++;
  }
  return answer;
}

//! 빠른 방법
function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

//유클리드 호제법이용한 최대공약수
function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

//! 배열의 최소공배수를 구할때
function lcm(arr) {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}
