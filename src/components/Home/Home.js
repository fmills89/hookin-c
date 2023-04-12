import React from "react";
import { Link } from "react-scroll";
import { repeatStyles } from "../../Style/style";
import mainLogo from "../../assets/logos/hc-logo.png";
import camo from "../../assets/bg/camo.png";
import DownButton from "../../UI/DownButton";

const style = {
  mainLogo: `rounded-md w-auto pl-6 `,
  logoContainer: `flex flex-col bg-lime-800/75 rounded-xl items-center mx-4 `,
};

function Home() {
  return (
    <div name="home" className={repeatStyles.pageContainers}>
      <div
        className={style.logoContainer}
        // style={{ backgroundImage: `url(${camo})` }}
      >
        <img
          className={style.mainLogo}
          src={mainLogo}
          alt="orxy head and company logo"
        />
        <Link to="about" smooth={true} offset={50} duration={800}>
          <DownButton />
        </Link>
      </div>
    </div>
  );
}

export default Home;
