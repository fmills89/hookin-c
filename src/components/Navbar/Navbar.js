import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaFacebookSquare } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import hookinLogo from "../../assets/logos/hookin-logo-sm.png";
import DownButton from "../../UI/DownButton";
import navBg from "../../assets/bg/navbar-bg.png";

const style = {
  container: ` flex justify-end w-full md:h-[100px] h-[80px] bg-slate-900/75 rounded-md mb-auto`,
  hookinLogoContainer: `flex justify-start m-1 w-full cursor-pointer `,
  hookinLogo: `rounded-lg `,
  logo: `rounded-lg hover:opacity-75 m-4`,
  button: ` md:w-[100px] w-14 md:w-20 h-[40px] rounded-md mt-5 md:mt-8 m-2 text-xs md:text-sm md:bg-stone-900/70 hover:underline underline-offset-4 md:ring ring-lime-800/75 ring-offset-0 text-slate-200`,
  navContainer: `hidden md:flex`,
  fbContainer: `w-1/6 flex justify-end`,
  fbButton: `m-2 scale-75 md:scale-100`,
  mobileMenu: `fixed top-0 left-0 w-full h-screen bg-stone-900 flex flex-col justify-center items-center`,
  mobileMenuText: `font-bold text-4xl p-4 text-slate-300 underline underline-offset-8`,
};

function Navbar() {
  const [nav, setNav] = useState(false);

  //state slice to control when mobile menu is active/non
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(true);
  // function to determine if mobileMenu is not active when to remove class and when to add back
  // issues w/ icons showing up under mobileMenu overlay
  function toggleMobileMenu() {
    setIsMobileMenuActive((prevState) => !prevState);
    if (!isMobileMenuActive) {
      document.body.classList.add("mobile-menu-active");
    } else {
      document.body.classList.remove("mobile-menu-active");
    }
  }

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div
      className={style.container}
      style={{
        backgroundImage: `url(${navBg}),`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Link
        to="home"
        className={style.hookinLogoContainer}
        smooth={true}
        offset={50}
        duration={800}
      >
        <img
          src={hookinLogo}
          alt="alternate company logo"
          className={style.hookinLogo}
        />
      </Link> */}

      <div className={style.navContainer}>
        <Link to="home" smooth={true} offset={50} duration={800}>
          <button className={style.button}>Home</button>
        </Link>

        <Link to="about" smooth={true} offset={50} duration={800}>
          <button className={style.button}>About</button>
        </Link>

        <Link to="service" smooth={true} offset={50} duration={800}>
          <button className={style.button}>Services</button>
        </Link>

        <Link to="work" smooth={true} offset={50} duration={800}>
          <button className={style.button}>Work</button>
        </Link>

        <Link to="contact" smooth={true} offset={50} duration={800}>
          <button className={style.button}>Contact</button>
        </Link>
      </div>
      {/* <div className={style.fbContainer}> */}
      <button className={style.fbButton}>
        <a
          href="https://www.facebook.com/HookinCVenados"
          alt="company facebook page"
        >
          <FaFacebookSquare size={30} style={{ color: "white" }} />
        </a>
      </button>
      <button className={style.fbButton}>
        <a href="mailto:">
          <SiMinutemailer size={30} style={{ color: "white" }} />
        </a>
      </button>
      {/* </div> */}
      <div
        onClick={() => {
          toggleMobileMenu();
          handleClick();
        }}
        className="md:hidden z-50 mt-7 mx-5"
      >
        {!nav ? (
          <FaBars size={25} style={{ color: "white" }} />
        ) : (
          <FaTimes size={25} style={{ color: "white" }} />
        )}
      </div>
      <ul className={!nav ? "hidden" : style.mobileMenu}>
        <li className={style.mobileMenuText}>
          <Link
            onClick={() => {
              toggleMobileMenu();
              handleClick();
            }}
            to="home"
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className={style.mobileMenuText}>
          <Link
            onClick={() => {
              toggleMobileMenu();
              handleClick();
            }}
            to="about"
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className={style.mobileMenuText}>
          <Link
            onClick={() => {
              toggleMobileMenu();
              handleClick();
            }}
            to="skills"
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className={style.mobileMenuText}>
          <Link
            onClick={() => {
              toggleMobileMenu();
              handleClick();
            }}
            to="work"
            smooth={true}
            offset={50}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className={style.mobileMenuText}>
          <Link
            onClick={() => {
              toggleMobileMenu();
              handleClick();
            }}
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
