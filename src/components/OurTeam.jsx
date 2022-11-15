import React from "react";
import { barbers } from "../constants/index";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const OurTeam = () => {
  return (
    <section name="ourTeam" className="w-full mt-10 p-2 sm:p-4  ">
      <div className="w-full  ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-white font-bold text-xl sm:text-2xl lg:text-4xl">
            CONHEÇA NOSSO <span className="text-yellow-500"> TIME</span>
          </h1>
          <p className="text-sm text-secondary-300 text-center">
            os melhores barbeiros para seu melhor estilo
          </p>
        </div>
      </div>
      <div className="w-full h-auto  flex flex-col space-y-4 sm:space-y-0 items-center sm:flex-row   sm:justify-around flex-wrap  mt-5 sm:space-x-4 sm:mt-10 ">
        {barbers.map((barber) => (
          <div key={barber.id} className="flex flex-col items-center">
            <img
              src={barber.image}
              className="w-[70%] lg:w-auto rounded-sm"
              alt="barber"
            />
            <h3 className="text-white font-regular  mt-2 ">{barber.name}</h3>
            <h5 className="text-secondary-300 font-light text-[12px] lg:text-[14px]  ">
              {barber.certficate}
            </h5>
            <div className="flex mt-2 space-x-2 text-secondary-300 font-light">
              <span className="border border-yellow-500 rounded-full p-2 ">
                <AiOutlineInstagram />
              </span>

              <span className="border border-yellow-500 rounded-full p-2 ">
                <AiOutlineTwitter />
              </span>
              <span className="border border-yellow-500 rounded-full p-2 ">
                <AiFillFacebook />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
