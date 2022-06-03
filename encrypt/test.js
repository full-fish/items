// let a = 30;
// let arr = [10, 20];
// arr[arr.length] = a;
// console.log(arr);
// console.log(BigInt("2".charCodeAt(0)));
let encrypted = [];
let password = "a12345678";

let e = 2n;
let N = 37172327n;
// for (let i = 0; i < password.length; i++) {
//   console.log("이전");
//   console.log(password[i]);
//   console.log(typeof password[i]);
//   let a = BigInt(password[i].charCodeAt(0));
//   console.log(a);
//   console.log(e);
//   console.log(N);
//   console.log("이후");
//   //   encrypted[encrypted.length] = a ** e % N;
//   console.log(a ** e);
// }
let a = 7n;
console.log("encrypted");
console.log(encrypted);
// console.log(e ** a);
let total = 1n;
for (let i = 0n; i < a; i++) {
  total = total * e;
}
console.log(total);
//2 4 8 16
console.log(BigInt(1n));
