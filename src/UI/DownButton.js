import React from "react";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

const style = {
  buttonContainer: "pt-4 pb-2",
  button: `rounded-full animate-bounce shadow-lg shadow-stone-900/75 bg-lime-700 button`,
};

function DownButton() {
  return (
    <div className={style.buttonContainer}>
      <button className={style.button}>
        <BsFillArrowDownCircleFill size={30} style={{ color: "white" }} />
      </button>
    </div>
  );
}

export default DownButton;
