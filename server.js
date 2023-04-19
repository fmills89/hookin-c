const dotenv = require("dotenv");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const process = require("process");
dotenv.config();

const pass = process.env.REACT_APP_NODEMAILER_PASS;
const email = process.env.REACT_APP_NODEMAILER_EMAIL;
const PORT = process.env.PORT || 3500;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`🌏 Now listening on localhost:${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

//setup router and send the email
router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "forrestfires89@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p> <p>Email: ${email}</p> <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "Error" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
