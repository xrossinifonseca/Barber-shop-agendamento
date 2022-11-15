import React from "react";

const InputError = ({ type, value, onChange, name, placeholder }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-orange-500 outline-none  border-b border-red-800 text-sm placeholder-orange-800 text-brown-500 sm:w-1/4"
      />
    </>
  );
};

export default InputError;
