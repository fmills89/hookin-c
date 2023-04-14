import React from "react";
import { Link } from "react-scroll/modules";
import { repeatStyles } from "../../Style/style";
import DownButton from "../../UI/DownButton";

const style = {
  headContainer: `w-full h-screen mb-20 flex justify-center items-center serviceWallpaper`,
  servicesContainer: `border bg-stone-900/75 md:rounded-full rounded-lg mx-20 flex flex-col items-center`,
  servicesList: `text-base md:text-4xl font-bold text-slate-300 flex flex-wrap justify-around my-14`,
  li: `p-2 m-8 underline underline-offset-4`,
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
        <Link to="work" smooth={true} offset={50} duration={800}>
          <DownButton />
        </Link>
      </div>
    </div>
  );
}

export default Services;
