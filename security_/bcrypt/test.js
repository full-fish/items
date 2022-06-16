const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";
const temp = "1234";
// const salt = "$2b$15$S5tansKjFQg7XZstnoLWbe";
bcrypt.genSalt(12, function (err, salt) {
  console.time();
  bcrypt.hash("g/vBrfdK2n7bq1bUWGs7V.4NYEXDG/9nhtUbhLui0hBUklxp.6d7a", salt, function (err, hash) {
    console.timeEnd();
    console.log("hash :", hash);
  });
});

// $2b$04$g/vBrfdK2n7bq1bUWGs7V.
// hash : $2b$04$g/vBrfdK2n7bq1bUWGs7V.4NYEXDG/9nhtUbhLui0hBUklxp.6d7a
// hash : $2b$05$g/vBrfdK2n7bq1bUWGs7V.IOe/CIECALTPiEXGZqU3MW.GmbwymGG
//!
// const salt = bcrypt.genSaltSync(20);
// console.log(salt);
// const hash = bcrypt.hashSync("1234", salt);
// console.log(hash);
// bcrypt.genSalt(10, function (err, salt) {
//   bcrypt.hash("1234", salt, function (err, hash) {});
// });

// for (let i = 0; i < 18; i++) {
//   console.time(i);
//   const hash = bcrypt.hashSync("1234", i);
//   console.timeEnd(i);
// }
let str = "68E8E468E90C93A8F178169BEEC748D56E85C997D3D7286B93C50C6B5388674E";
console.log(str.length);
let str2 = "$2b$10$sRIrL1KIPosKbmJV00mkjeqel8VCvmEJw8QHmJLwvJxAFJqUWbOl6";
console.log(str2.length);
let str3 = "$2b$15$SY9W6aPRDFeVoa.2Ty6GpOYQdq.nTGCXy/m/QFUD1o/i5BdFAFDBK";
console.log(str3.length);
console.log("$2b$15$SY9W6aPRDFeVoa.2Ty6GpO".length);
console.log("4vWmFJMvUP7wXZKTcDdwYVRn7SdpK2q".length);
//! 1234 03AC674216F3E15C761EE1A5E255F067953623C8B388B4459E13F978D7C846F4
// let hash = "$2b$10$7SiLPM233VKoH81Dsv0thO2wqZpoE4phWHMfF5cw6irVP.CvUUWBW";
// console.log("1");
// const a = bcrypt.compare(temp, hash, function (err, result) {
//   // result == true
//   console.log(result);
// });
// console.log(a);

// async function checkUser(username, temp, hash) {
//   //... fetch user from a db etc.

//   const match = await bcrypt.compare(temp, hash);
//   console.log("match");
//   console.log(match);
//   if (match) {
//     //login
//   }

//   //...
// }

// checkUser("1", temp, hash);
