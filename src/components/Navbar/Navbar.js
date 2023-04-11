import React from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/logos/hookin-logo-sm.png";

const style = {
  container: `fixed w-full h-[200px] border-4 border-red-300 rounded-md flex items-center`,
  ul: `flex p-4 justify-between justify-center`,
  li: `p-4 cursor-pointer text-xl`,
  logo: `rounded-lg hover:opacity-75 m-4 scale-50`,
};

function Navbar() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className={style.container}>
      <img className={style.logo} src={Logo} />
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
