import React from "react";
import { useStateContext } from "../context/StateContext";

const HeroBanner = () => {
  const { navigate, user } = useStateContext();

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <section name="home" className=" w-full h-[50vh] sm:h-[70vh] relative ">
      <div className="w-full h-full space-y-4 absolute z-10 text-white flex flex-col justify-center items-center bg-herobanner bg-cover bg-center sm:bg-top  ">
        <div className="bg-black w-full h-full opacity-40"></div>
      </div>

      <div className="absolute z-20 w-full h-full flex flex-col items-start justify-center p-4  sm:p-16  ">
        <span className="text-secondary-300  font-garamond space-y-4  ">
          <h1 className="text-3xl sm:text-5xl  lg:text-6xl">
            Para os <br /> amantes de{" "}
            <span className="text-yellow-500"> barba </span>
          </h1>

          {!user && (
            <button
              className=" w-28 h-8 border border-yellow-500 rounded  font-regular text-[13px] sm:text-[15px] lg:w-40 hover:bg-yellow-500"
              onClick={() => goLogin()}
            >
              Começar agora
            </button>
          )}
        </span>
      </div>
    </section>
  );
};

export default HeroBanner;
