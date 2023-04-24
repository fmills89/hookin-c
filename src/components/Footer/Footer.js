import React from "react";

const style = {
  footerContainer: ` w-auto h-[100px] p-4 m-2 flex flex-col justify-start bg-stone-300/75 rounded-lg`,
  font: `font-medium`,
  linkFont: `font-bold`,
  button: `border-2 border-stone-900 rounded-full bg-slate-600/75 w-24 m-2`,
};

function Footer() {
  return (
    <div className={style.footerContainer}>
      <p className={style.font}>Need a website?</p>
      <button className={style.button}>
        <a
          className={style.linkFont}
          href="https://fmills89-portfolio.netlify.app/"
        >
          Click here!
        </a>
      </button>
    </div>
  );
}

export default Footer;
