import React from "react";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

const style = {
  button: `rounded-full animate-bounce shadow-lg shadow-lime-600/75 bg-lime-700 opacity-75`,
  buttonContainer: "p-4 m-4",
};

function DownButton() {
  return (
    <div className={style.buttonContainer}>
      <button className={style.button}>
        <BsFillArrowDownCircleFill size={30} />
      </button>
    </div>
  );
}

export default DownButton;
