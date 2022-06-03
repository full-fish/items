let n = 2n;
let m = 10n;

let result = 1n;
let count = 0;
console.time("for문");
for (let i = 0; i < m; i++) {
  count++;
  result *= n;
}
console.log(count);
console.timeEnd("for문");
function pow(n, m) {
  let mul = 1n;
  let count = 0;
  while (m > 1n) {
    count++;
    if (m % 2n === 0n) {
      n = n * n;
      m = m / 2n;
    } else {
      mul *= n;
      n = n * n;
      m = m / 2n;
    }
  }
  console.log(count);
  return n * mul;
}
console.time("**연산자");
let b = 2n ** 10473473n;
// console.log(b);
console.timeEnd("**연산자");

console.time("pow함수");
let c = pow(2n, 10473473n);
// console.log(b);
console.timeEnd("pow함수");
console.log(2n ** 2300n);
