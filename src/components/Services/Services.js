import React from "react";
import { Link } from "react-scroll/modules";
import { repeatStyles } from "../../Style/style";
import DownButton from "../../UI/DownButton";

const style = {
  headContainer: `w-full h-screen mb-20 flex flex-col justify-center items-center serviceWallpaper mb-auto`,
  servicesContainer: `border border-stone-900 bg-slate-900/75 rounded-lg mx-12 shadow-xl`,
  servicesList: `text-base md:text-2xl font-bold text-slate-300 flex flex-wrap justify-center my-14`,
  li: `py-4 m-8 underline underline-offset-8`,
};

function Services() {
  return (
    <div name="service" className={style.headContainer}>
      <div className={style.servicesContainer}>
        <ul className={style.servicesList}>
          <li className={style.li}>Hunting</li>
          <li className={style.li}>Live Sell</li>
          <li className={style.li}>Widlife Capture</li>
          <li className={style.li}>Ranch Consulting</li>
          <li className={style.li}>Ranch Services</li>
        </ul>
      </div>
      <Link to="work" smooth={true} offset={50} duration={800}>
        <DownButton />
      </Link>
    </div>
  );
}

export default Services;
