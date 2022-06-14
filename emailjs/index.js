const emailjs = require("emailjs-com");
// const sendEmail = () => {
emailjs.init("E2B0LhIiBHnO0fVI1");
//   let templateParams = {
//     // name: document.getElementById("name").value,
//     name: "만선",
//   };
//   console.log(templateParams);
//   emailjs.send("service_0zr0bhg", "template_z7qfoa5", templateParams).then(
//     function (response) {
//       console.log("Success!", response.status, response.text);
//       //   setStatus("success");
//     },
//     function (error) {
//       console.log("Failed...", error);
//       //   setStatus("fail");
//     }
//   );
// };
// sendEmail();
emailjs.send("service_0zr0bhg", "template_z7qfoa5", {
  name: "123456",
});
// //!

// var data = {
//   service_id: "service_0zr0bhg",
//   template_id: "template_z7qfoa5",
//   user_id: "E2B0LhIiBHnO0fVI1",
//   template_params: {
//     name: "James",
//   },
// };

// $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
//   type: "POST",
//   data: JSON.stringify(data),
//   contentType: "application/json",
// })
//   .done(function () {
//     alert("Your mail is sent!");
//   })
//   .fail(function (error) {
//     alert("Oops... " + JSON.stringify(error));
//   });
