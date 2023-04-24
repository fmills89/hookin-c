import React from "react";
import { Link } from "react-scroll/modules";
import img1 from "../../assets/work/01-img.png";
import img2 from "../../assets/work/02-img.png";
import img3 from "../../assets/work/03-img.png";
import img4 from "../../assets/work/04-img.png";
import img5 from "../../assets/work/05-img.png";
import img6 from "../../assets/work/06-img.png";
import img7 from "../../assets/work/07-img.png";
import img8 from "../../assets/work/08-img.png";
import img9 from "../../assets/work/09-img.png";
import img10 from "../../assets/work/10-img.png";
import img11 from "../../assets/work/11-img.png";
import img12 from "../../assets/work/12-img.png";
import { repeatStyles } from "../../Style/style";
import DownButton from "../../UI/DownButton";

const style = {
  workContainer: `w-full h-[2800px] md:h-[700px] p-8 flex flex-col justify-center items-center workWallpaper`,
  picCollageContainer: `w-full h-full grid grid-cols-1 md:grid-cols-4 gap-1 py-4`,
  picsContainer: ` flex justify-center items-center m-1 md:m-4 overflow-hidden rounded-lg border-2 md:border-4 border-stone-900/75 bg-stone-900/50 hover:shadow-2xl hover:shadow-stone-900/75`,
  pics: `rounded-lg transition ease-in-out delay-150 md:hover:scale-110 duration-300`,
  buttonContainer: ``,
};

function Work() {
  return (
    <div name="work" className={style.workContainer}>
      <div className={style.picCollageContainer}>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img1} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img2} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img3} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img4} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img5} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img6} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img7} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img8} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img9} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img10} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img11} alt="owner holding deer" />
        </div>
        <div className={style.picsContainer}>
          <img className={style.pics} src={img12} alt="owner holding deer" />
        </div>
      </div>
      <Link
        className={style.buttonContainer}
        to="contact"
        smooth={true}
        offset={50}
        duration={800}
      >
        <DownButton />
      </Link>
    </div>
  );
}

export default Work;
