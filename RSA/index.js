// 두 소수 p , q 를 준비한다
// p - 1, q - 1 각각 서로소인 정수 e를 준비한다
// ed를 (p - 1)(q - 1)으로 나눈 나머지가 1이 되도록 하는 d를 찾는다.
// N = pq를 계산한 후, N과 e를 공개한다. 이들이 바로 공개키. d는 개인키이다.
// 이제 p, q, (p-1)(q-1)는 필요 없거니와 있어 봐야 보안에 오히려 문제를 일으킬 수 있으니, 파기한다

const a = 70n;
// 두 소수 p , q 를 준비한다
const p = 5849n;
// const q = 3061n;
const q = 3n;
// p - 1, q - 1 각각 서로소인 정수 e를 준비한다
const e = 65537n;
// ed를 (p - 1)(q - 1)으로 나눈 나머지가 1이 되도록 하는 d를 찾는다.
let d = 0n;
while (!((e * d) % ((p - 1n) * (q - 1n)) === 1n)) {
  d++;
}
// N = pq를 계산한 후, N과 e를 공개한다. 이들이 바로 공개키. d는 개인키이다.
const N = p * q;
// 암호화
let encryptRemainder = a ** e % N;
let x = 0n;
// while (!(x % N === encryptRemainder)) {
//   x++;
// }
x = encryptRemainder;
// 복호화
let decryptRemainder = x ** d % N;

let result = 0n;
// while (!(result % N === decryptRemainder)) {
//   result++;
// }
result = decryptRemainder;

console.log(a, p, q, e, d, N);
console.log("encryptRemainder", encryptRemainder);
console.log("x", x);
console.log("decryptRemainder", decryptRemainder);
console.log(result);
BigInt.prototype.toJSON = function () {
  return this.toString();
};
let bb = JSON.stringify(BigInt(1));
bb = JSON.parse(bb);
console.log(bb);
console.log(BigInt(Number(bb)));
console.log("aaaaaaaa");
console.log(345959n ** 2400387n);
