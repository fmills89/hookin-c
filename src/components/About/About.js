import React from "react";
import { Link } from "react-scroll/modules";
import { repeatStyles } from "../../Style/style";
import DownButton from "../../UI/DownButton";

const style = {
  mainContainer: `w-full h-screen flex justify-center items-center aboutWallpaper`,
  container: `flex flex-col rounded-xl items-center mx-8 pt-8 mt-20 `,
  about: `p-20 m-2 text-lg md:text-2xl border border-stone-800/50 text-slate-100 rounded-lg bg-slate-800/75 font-bold tracking-wide leading-relaxed text-center text-slate-300`,
};

function About() {
  return (
    <div name="about" className={style.mainContainer}>
      <div className={style.container}>
        <p className={style.about}>
          Hookin-C is family owned and has been operating for over 8 years. We
          pride ourselves on providing the best in quality services and
          experiences. We offer a multitude of services, see below.
        </p>
        <Link to="service" smooth="true" offset={50} duration={800}>
          <DownButton />
        </Link>
      </div>
    </div>
  );
}

export default About;
