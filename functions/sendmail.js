require("dotenv").config();
const nodemailer = require("nodemailer");

const pass = process.env.REACT_APP_NODEMAILER_PASS;
const email = process.env.REACT_APP_NODEMAILER_EMAIL;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

exports.handler = async function (event, context, callback) {
  const method = event.httpMethod;
  if (method !== "POST") {
    return {
      statusCode: 405,
      body: "Only POST requests allowed",
    };
  }
  let data = JSON.parse(event.body);
  if (!data) {
    return {
      statusCode: 400,
      body: "Please provide all values",
    };
  }
  try {
    transporter.sendMail({
      from: data.name,
      to: "forrestfires89@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${data.name}</p> <p>Email: ${data.email}</p> <p>Message: ${data.message}</p>`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        result: "success",
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error.message),
    };
  }
};
