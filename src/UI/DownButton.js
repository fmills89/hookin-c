import React from "react";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

const style = {
  buttonContainer: "pt-4 pb-2",
};

function DownButton() {
  return (
    <div className={style.buttonContainer}>
      <button className="button">
        <BsFillArrowDownCircleFill size={30} />
      </button>
    </div>
  );
}

export default DownButton;
