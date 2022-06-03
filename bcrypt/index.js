// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const plainTextPassword1 = "asdf1234";

// const createSaltAndHash = (password, rounds) =>
//   bcrypt
//     .genSalt(rounds)
//     .then((salt) => {
//       console.log(`salt\t${salt}`);
//       return bcrypt.hash(password, salt);
//     })
//     .then((hash) => {
//       // hash function
//       console.log(`hash\t${hash}`);
//     });

// createSaltAndHash(plainTextPassword1, saltRounds);
// // const plainTextPassword1 = "asdf1234";
// const plainTextPassword2 = "qwer1234";
// const hash = "$2b$10$LLEOlGpWW5sRZdRJlrPpOOsnziBtr5PVEw5aeDxUz6tLwdy1sNfJC";
// const comparePassword = (password, hash) =>
//   bcrypt.compare(password, hash).then((result) => {
//     if (result) console.log(password, "password is valid");
//     else console.log(password, "password is invalid");
//     return result;
//   });

// comparePassword(plainTextPassword1, hash);
// comparePassword(plainTextPassword2, hash);
//!
const bcrypt = require("bcrypt");
const saltRounds = 13;
const myPlaintextPassword = "sktkfka5";
const someOtherPlaintextPassword = "sktkfka6";
console.time();
bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash);
    console.log(salt);
  });
});
console.timeEnd();
//?
// bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
//   // Store hash in your password DB.
//   console.log(hash);
//   //   console.log(salt);
// });

// let hash = "$2b$10$mGE9ilXO3OQYbce.fQmRd.lcU23CKAhngDzmamzOnf760s/52Oi4K";
// bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
//   // result == true
//   console.log("true", result);
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
//   // result == false
//   console.log("false", result);
// });
//!

// async function checkUser(username, password) {
//   //... fetch user from a db etc.

//   const match = await bcrypt.compare(password, user.passwordHash);

//   if (match) {
//     //login
//   }

//   //...
// }
