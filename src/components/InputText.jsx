import React from "react";

const InputText = ({ type, value, onChange, name, placeholder, label }) => {
  return (
    <div className=" flex flex-col  w-[60%] sm:w-[80%]   ">
      <label className="mt-2">{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent focus:outline-none  border border-transparent border-b-white placeholder:text-secondary-300 placeholder:text-sm"
      />
    </div>
  );
};

export default InputText;
