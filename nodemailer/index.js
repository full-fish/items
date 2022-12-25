// const nodemailer = require("nodemailer");
// const main = async () => {
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "fullfish94@gmail.com",
//       pass: "비번비번",
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: `fullfish94@gmail.com`,
//     to: "manseon94@gmail.com",
//     subject: "WDMA Auth Number",
//     text: "generatedAuthNumber",
//     // html: `<b>${generatedAuthNumber}</b>`,
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   res.status(200).json({
//     status: "Success",
//     code: 200,
//     message: "Sent Auth Email",
//   });
// };

// main().catch(console.error);
//!
const nodemailer = require('nodemailer')
async function main() {
  let testAccount = await nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: '보내는 사람의 이메일주소',
      pass: '보내는 사람의 비밀번호',
    },
  })
  let info = await transporter.sendMail({
    from: '보내는 사람의 이메일주소',
    to: '받는 사람의 이메일 주소',
    subject: '제목',
    text: '내용',
    // html: "<b>Hello world?</b>",
  })
}

main().catch(console.error)
//!
var nodemailer = require('nodemailer')

var smtpTransporter = require('nodemailer-smtp-transport')
function sendEmail(email, response) {
  //이메일 보내기

  var smtpTransport = nodemailer.createTransport(
    smtpTransporter({
      service: 'Naver',

      host: 'smtp.naver.com',

      auth: {
        user: 'cwre1357@naver.com', //보내는 분의 메일계정

        pass: '비번비번',
      },
    })
  )

  var mailOption = {
    from: 'cwre1357@naver.com', // 보내는 분의 메일계정
    to: 'cwre1357@naver.com', // 받는 분의 메일계정 (여러 개 가능)
    subject: '이것은 제목',
    text: 'ㅎㅇㅎㅇ',
  }

  smtpTransport.sendMail(mailOption, (err, response) => {
    // 메일을 보내는 코드

    if (err) {
      console.log(err)
      throw err
    }

    // response.status(200).json({
    //   status: "Success",
    //   code: 200,
    //   message: "Sent Auth Email",
    // });
  })
}
sendEmail()
//! 랜덤 패스워드 생성
// const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const number = "0123456789";
// const special = "!@#$%^&*?";
// const random = "abc";
// let newPassword = "";
// let a = Math.ceil(Math.random() * 5),
//   b = Math.ceil(Math.random() * 5);
// c = Math.ceil(Math.random() * 5);
// while (a + b + c >= 1) {
//   const select = random[Math.floor(Math.random() * random.length)];
//   //   console.log(select);
//   if (select === "a" && a !== 0) {
//     newPassword += alphabet[Math.floor(Math.random() * alphabet.length)];
//     a--;
//   } else if (select === "b" && b !== 0) {
//     newPassword += number[Math.floor(Math.random() * number.length)];
//     b--;
//   } else if (select === "c" && c !== 0) {
//     newPassword += special[Math.floor(Math.random() * special.length)];
//     c--;
//   }
// }
// console.log(newPassword);
