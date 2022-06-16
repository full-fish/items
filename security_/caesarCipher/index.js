let str = "I am manseon azAZ!@#";
let shiftNumber = 84;

str = encrypt(str, shiftNumber);
console.log("encryptStr : ", str);
str = decrypt(str, shiftNumber);
console.log("decryptStr : ", str);

function encrypt(str, shiftNumber) {
  let shift = shiftNumber % 26;
  let resultArr = [];
  let unicodeArr = [];
  for (let i = 0; i < str.length; i++) {
    const unicode = str[i].charCodeAt(0);
    let a = 0;
    if (/[A-Z]/.test(str[i])) {
      if (unicode + shift > 90) a = 26;
      unicodeArr.push(unicode + shift - a);
    } else if (/[a-z]/.test(str[i])) {
      if (unicode + shift > 122) a = 26;
      unicodeArr.push(unicode + shift - a);
    } else unicodeArr.push(unicode);
  }
  unicodeArr.forEach((ele) => resultArr.push(String.fromCharCode(ele)));
  return resultArr.join("");
}

function decrypt(str, shiftNumber) {
  let shift = shiftNumber % 26;
  let resultArr = [];
  let unicodeArr = [];
  for (let i = 0; i < str.length; i++) {
    const unicode = str[i].charCodeAt(0);
    let a = 0;
    if (/[A-Z]/.test(str[i])) {
      if (unicode - shift < 65) a = 26;
      unicodeArr.push(unicode - shift + a);
    } else if (/[a-z]/.test(str[i])) {
      if (unicode - shift < 97) a = 26;
      unicodeArr.push(unicode - shift + a);
    } else unicodeArr.push(unicode);
  }
  unicodeArr.forEach((ele) => resultArr.push(String.fromCharCode(ele)));
  return resultArr.join("");
}
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
