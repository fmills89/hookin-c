import React, { useState } from "react";
import { SiSolid } from "react-icons/si";
import { repeatStyles } from "../../Style/style";
import { FaRegHandPointLeft } from "react-icons/fa";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";
import axios from "axios";

const style = {
  contactContainer: `w-full h-screen flex flex-col justify-center items-center contactWallpaper`,
  formContainer: `max-w-[600px] w-auto h-[550px] md:h-[600px] flex flex-col border rounded-lg border-slate-900 shadow-lg bg-slate-800/75 p-2 md:p-4 m-2 mt-4 text-slate-300 scale-75 md:scale-100 form`,
  inputForm: `p-2 rounded-md my-4 mb-4 w-full bg-slate-100/75 text-black`,
  font: `font-bold text-2xl pb-4 flex flex-wrap items-baseline`,
  font2: `text-xl md:py-2 py-3 `,
  fbContainer: `flex items-center pl-1`,
  fbLogo: `border p-2 m-2 bg-white border rounded-lg`,
  textArea: `w-auto md:h-[300px] h-auto rounded-lg p-2 font-light bg-slate-100/75 text-black mt-4`,
  submitButtonContainer: `w-auto p-1 flex justify-center`,
  submitButton: `border border-stone-900 shadow-lg bg-stone-900 md:p-4 p-3 md:m-4 m-2 rounded-lg`,
  homeArrow: `button rounded-full animate-bounce shadow-lg shadow-stone-900/75 bg-lime-700 button`,
  homeButtonContainer: `w-full flex justify-center md:justify-center pt-4`,
};
function Contact() {
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  //   sent: false,
  //   buttonText: "Submit",
  //   err: "",
  // });

  // console.log({ ...data });

  // const resetForm = () => {
  //   setData({
  //     name: "",
  //     email: "",
  //     message: "",
  //     sent: false,
  //     buttonText: "Submit",
  //     err: "",
  //   });
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setData({ ...data, buttonText: "Sending..." });

  //   axios
  //     .post("/api/sendmail", data)
  //     .then((res) => {
  //       if (res.data.result !== "success") {
  //         setData({
  //           ...data,
  //           buttonText: "Failed to send!",
  //           sent: false,
  //           err: "fail",
  //         });
  //         setTimeout(() => {
  //           resetForm();
  //         }, 2000);
  //       } else {
  //         alert("Message sent");
  //         setData({
  //           ...data,
  //           sent: true,
  //           buttonText: "Sent",
  //           err: "Success",
  //         });
  //         setTimeout(() => {
  //           resetForm();
  //         }, 2000);
  //       }
  //     })
  //     .catch((err) => {
  //       setData({
  //         ...data,
  //         buttonText: "Failed to send!",
  //         err: "fail",
  //       });
  //     });
  // };
  return (
    <div name="contact" className={style.contactContainer}>
      <form
        className={style.formContainer}
        method="POST"
        action="https://getform.io/f/8b06f0ae-6711-49f8-a767-2eaaa9d520f1"
      >
        <p className={style.font}>
          Contact us on{" "}
          <div className={style.fbContainer}>
            <a
              href="https://www.facebook.com/HookinCVenados"
              style={{ color: "#1B21CD" }}
              className={style.fbLogo}
            >
              Facebook.
            </a>
            <FaRegHandPointLeft size={40} style={{ paddingLeft: "10px" }} />
          </div>
        </p>
        <p className={style.font2}>
          Don't have Facebook? Fill out the form below to reach us or hit the
          email button in the top corner. We will contact you back as soon as
          possible.
        </p>

        <input
          className={style.inputForm}
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className={style.inputForm}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className={style.textArea}
          placeholder="Enter your message here.."
          name="message"
          required
        ></textarea>
        <div className={style.submitButtonContainer}>
          <button className={style.submitButton} type="submit">
            Submit
          </button>
        </div>
      </form>
      <Link
        to="home"
        smooth={true}
        offset={50}
        duration={800}
        className={style.homeButtonContainer}
      >
        <BsFillArrowUpCircleFill
          size={30}
          className={style.homeArrow}
          style={{ color: "white" }}
        />
      </Link>
    </div>
  );
}

export default Contact;
