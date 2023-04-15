import React from "react";
import { SiSolid } from "react-icons/si";
import { repeatStyles } from "../../Style/style";
import { FaRegHandPointLeft } from "react-icons/fa";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";

const style = {
  contactContainer: `w-full h-screen flex flex-col justify-center items-center contactWallpaper`,
  formContainer: `max-w-[600px] w-full flex flex-col pb-8 border rounded-lg border-slate-800 shadow-lg bg-slate-800/75 p-2 md:p-4 m-2 text-slate-300`,
  inputForm: `p-2 rounded-md my-4 mb-4 md:w-1/2 w-5/6 bg-slate-100/75 text-black`,
  font: `font-bold text-2xl pb-4 flex flex-wrap items-baseline`,
  font2: `text-xl md:py-2 py-3 `,
  fbContainer: `flex items-center pl-1`,
  fbLogo: `border p-2 m-2 bg-white border rounded-lg`,
  textArea: `w-auto md:h-[300px] h-auto rounded-lg p-2 font-light bg-slate-100/75 text-black mt-4`,
  homeArrow: `rounded-full animate-bounce shadow-lg shadow-stone-900/75 bg-lime-700`,
  homeButtonContainer: `w-full mr-52 flex justify-end`,
};
function Contact() {
  return (
    <div name="contact" className={style.contactContainer}>
      <form className={style.formContainer}>
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
        />
        <input
          className={style.inputForm}
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className={style.textArea}
          placeholder="Enter your message here.."
          name="message"
          rows="10"
        ></textarea>
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
