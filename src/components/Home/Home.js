import React from "react";
import { Link } from "react-scroll";
import { repeatStyles } from "../../Style/style";
import mainLogo from "../../assets/logos/hc-logo.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const style = {
  mainLogo: `rounded-md w-auto pl-6`,
  logoContainer: `flex flex-col rounded-xl bg-slate-800 items-center mx-4`,
  button: `rounded-full animate-bounce shadow-lg shadow-lime-600/75 bg-lime-700 opacity-75`,
  buttonContainer: "p-4 m-4",
};

function Home() {
  return (
    <div name="home" className={repeatStyles.pageContainers}>
      <div className={style.logoContainer}>
        <img className={style.mainLogo} src={mainLogo} />
        <Link to="about" smooth={true} offset={50} duration={800}>
          <div className={style.buttonContainer}>
            <button className={style.button}>
              <BsFillArrowDownCircleFill size={30} />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
