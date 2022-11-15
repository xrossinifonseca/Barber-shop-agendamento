import React from "react";

const ButtonText = ({ text, type, onClick }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className=" bg-transparent border border-yellow-500 w-[120px] h-[25px]  text-yellow-500 text-[15px] font-regular"
      >
        {text}
      </button>
    </>
  );
};

export default ButtonText;
