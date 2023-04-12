import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaFacebookSquare } from "react-icons/fa";

const style = {
  container: `fixed flex justify-evenly w-full md:h-[100px] h-[80px] bg-slate-400 rounded-md opacity-75`,
  logo: `rounded-lg hover:opacity-75 m-4`,
  button: `md:w-[100px] w-14 md:w-24 h-[50px] rounded-md mt-4 md:mt-6 text-xs md:text-base md:bg-slate-600 hover:underline underline-offset-4`,
  navContainer: `w-5/6 flex justify-center`,
  fbContainer: `w-1/6 flex justify-end`,
  fbButton: `m-2 scale-75 md:scale-100`,
};

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className={style.container}>
      {/* <div className={style.navContainer}> */}
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
      {/* </div> */}
      {/* <div className={style.fbContainer}> */}
      <button className={style.fbButton}>
        <a
          href="https://www.facebook.com/HookinCVenados"
          alt="company facebook page"
        >
          <FaFacebookSquare size={30} />
        </a>
      </button>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
