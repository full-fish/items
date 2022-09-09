//! 재귀함수를 이용한 0(2^N) 방법
function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.time();
console.log(fibonacci(45));
console.timeEnd();

//! 객체 메모리 이용
function fibonacci2(n, memo = { 0: 0, 1: 1 }) {
  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
}
console.time();
console.log(fibonacci2(45));
console.timeEnd();

//! 반복문을 이용한 0(N) 방법
function fibonacci3(n) {
  let a = 1,
    b = 1,
    result = 1;
  for (let i = 3; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}
console.time();
console.log(fibonacci3(45));
console.timeEnd();

//! 배열 이용
function fibonacci4(n) {
  let fiboArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    fiboArr.push(fiboArr[i - 1] + fiboArr[i - 2]);
  }
  return fiboArr[n];
}
console.time();
console.log(fibonacci4(45));
console.timeEnd();
