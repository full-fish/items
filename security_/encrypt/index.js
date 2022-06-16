let ch = "9";
console.log("ch", ch);
ch = encrypt(ch);
console.log("encryptCh", ch);
ch = decrypt(ch);
console.log("decryptCh", ch);

function encrypt(ch) {
  let unicode = ch.charCodeAt(0);
  console.log("aa", unicode);
  unicode += 3; // 암호화 암호 뭐로 해요 뭐로 해요 뭐로 해요
  return String.fromCharCode(unicode);
}
function decrypt(ch) {
  let unicode = ch.charCodeAt(0);
  unicode -= 3; // 복호화
  return String.fromCharCode(unicode);
}

for (let i = 0; i < 100; i++) {
  if ((7 * i) % 48 === 1) console.log("i", i);
}
let num = 193;
let sum = 1;
for (let i = 0; i < 7; i++) {
  sum = sum * num;
  console.log(sum);
}
// console.log(BigInt(25) ** BigInt(60000));
// console.log((BigInt(1) + BigInt(1) + 1n) / BigInt(2));
// console.log(BigInt(2) === 2n);
// console.log(BigInt(4 / 2));
// console.log(BigInt(3) / BigInt(2));
for (let i = 0; i < 100; i++) {
  console.log(`${i}, l${String.fromCharCode(i)}l`);
}
console.log(String.fromCharCode(Number(109n)));
