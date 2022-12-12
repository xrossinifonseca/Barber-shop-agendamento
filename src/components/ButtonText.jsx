import React from "react";
import load from "../assets/loading.svg";

const ButtonText = ({ text, type, onClick, loading, disabled }) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className=" bg-transparent border border-yellow-500 w-[120px] h-[30px]  text-yellow-500 text-[15px] font-regular flex justify-center items-center"
      >
        {loading ? <img src={load} alt="loading" className="w-7" /> : text}
      </button>
    </>
  );
};

export default ButtonText;
