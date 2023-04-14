import React from "react";
import { Link } from "react-scroll";
import { repeatStyles } from "../../Style/style";
import mainLogo from "../../assets/logos/hc-logo.png";
import camo from "../../assets/bg/camo.png";
import DownButton from "../../UI/DownButton";
import hookinLogo from "../../assets/logos/hookin-logo.png";
import navBg from "../../assets/bg/navbar-bg.png";
import Navbar from "../Navbar/Navbar";

const style = {
  mainContainer: `flex flex-col w-full h-screen flex justify-center items-center mobileWallpaper`,
  mainLogo: `rounded-lg w-auto px-6 m-auto`,
  logoContainer: `flex flex-col bg-slate-900/50 rounded-xl items-center mx-4 pt-8 mb-auto`,
  landingPage: `w-full h-screen mb-20 flex justify-center items-center`,
};

function Home() {
  return (
    <div
      name="home"
      className={style.mainContainer}
      // style={{
      //   backgroundImage: `url(${navBg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <Navbar />
      <div className={style.logoContainer}>
        <img
          className={style.mainLogo}
          src={hookinLogo}
          alt="orxy head and company logo"
        />
        <Link
          className={style.arrow}
          to="about"
          smooth={true}
          offset={50}
          duration={800}
        >
          <DownButton />
        </Link>
      </div>
    </div>
  );
}

export default Home;
