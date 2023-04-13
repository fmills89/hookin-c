import React from "react";
import { Link } from "react-scroll";
import { repeatStyles } from "../../Style/style";
import mainLogo from "../../assets/logos/hc-logo.png";
import camo from "../../assets/bg/camo.png";
import DownButton from "../../UI/DownButton";
import hookinLogo from "../../assets/logos/hookin-logo.png";

const style = {
  mainLogo: `rounded-lg w-auto px-6 m-2`,
  logoContainer: `flex flex-col bg-lime-900/50 rounded-xl items-center mx-4 pt-20 w-full`,
  landingPage: `w-full h-screen mb-20 flex justify-center items-center`,
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
          src={hookinLogo}
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
