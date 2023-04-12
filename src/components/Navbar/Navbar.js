import React from "react";
import { Link } from "react-scroll";

const style = {
  container: `fixed w-full h-[80px] border-4 border-red-300 rounded-md`,
  ul: `flex justify-center flex-wrap`,
  li: `p-4 m-2 cursor-pointer hover:underline underline-offset-8 border rounded-md`,
  logo: `rounded-lg hover:opacity-75 m-4`,
};

function Navbar() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className={style.container}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link
            to="home"
            onClick={handleClick}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className={style.li}>
          <Link
            to="about"
            onClick={handleClick}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className={style.li}>
          <Link
            to="service"
            onClick={handleClick}
            smooth={true}
            offset={50}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className={style.li}>
          <Link
            to="work"
            onClick={handleClick}
            smooth={true}
            offset={50}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className={style.li}>
          <Link
            to="contact"
            onClick={handleClick}
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
