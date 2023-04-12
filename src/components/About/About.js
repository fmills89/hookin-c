import React from "react";
import { Link } from "react-scroll/modules";
import { repeatStyles } from "../../Style/style";
import DownButton from "../../UI/DownButton";

const style = {
  container: `flex flex-col rounded-xl bg-lime-800/75 items-center mx-8`,
  about: `p-4 m-4 text-2xl border border-stone-950 rounded-lg bg-slate-800 md:m-40 font-bold tracking-wide leading-relaxed text-center text-gray-300`,
};

function About() {
  return (
    <div name="about" className={repeatStyles.pageContainers}>
      <div className={style.container}>
        <p className={style.about}>
          Hookin-C is family owned and has been operating for over 8 years. We
          pride ourselves on provided the best in quality services and
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
