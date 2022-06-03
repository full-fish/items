const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
const lowerMonoAlphabet = "jnahiuvrylzmbfcsqtdeogpwxk";
const upperAlphabet = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const upperMonoAlphabet = "HPLDCTVSNWAXGZBYFGEMORKQUI";

let str = "I! am manseon";
console.log("str : ", str);
str = encrypt(str);
console.log("encryptStr : ", str);
str = decrypt(str);
console.log("decryptStr : ", str);

function encrypt(str) {
  let resultArr = [];
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) resultArr.push(lowerMonoAlphabet[lowerAlphabet.indexOf(str[i])]);
    else if (/[A-Z]/.test(str[i])) resultArr.push(upperMonoAlphabet[upperAlphabet.indexOf(str[i])]);
    else resultArr.push(str[i]);
  }
  return resultArr.join("");
}

function decrypt(str) {
  let resultArr = [];
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) resultArr.push(lowerAlphabet[lowerMonoAlphabet.indexOf(str[i])]);
    else if (/[A-Z]/.test(str[i])) resultArr.push(upperAlphabet[upperMonoAlphabet.indexOf(str[i])]);
    else resultArr.push(str[i]);
  }
  return resultArr.join("");
}
console.log(Boolean(/A/.test("A")));
