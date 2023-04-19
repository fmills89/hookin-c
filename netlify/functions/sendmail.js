const nodemailer = require("nodemailer");

const pass = process.env.REACT_APP_NODEMAILER_PASS;
const email = process.env.REACT_APP_NODEMAILER_EMAIL;

exports.handler = async function (event, context, callback) {
  // let data = JSON.parse(event.body);

  // let transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: email,
  //     pass: pass,
  //   },
  // });

  // transporter.sendMail(
  //   {
  //     from: data.name,
  //     to: "forrestfires89@gmail.com",
  //     subject: "Contact Form Submission",
  //     html: `<p>Name: ${data.name}</p> <p>Email: ${data.email}</p> <p>Message: ${data.message}</p>`,
  //   },
  //   function (error, info) {
  //     if (error) {
  //       callback(error);
  //     } else {
  //       callback(null, {
  //         statusCode: 200,
  //         body: JSON.stringify({
  //           result: "success",
  //         }),
  //       });
  //     }
  //   }
  // );
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
