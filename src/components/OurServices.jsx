import React from "react";

import { features } from "../constants/index.js";

const OurServices = () => {
  return (
    <section name="services" className="w-full mt-10 ">
      <div className=" w-full ">
        <div className="flex items-center space-x-2 ml-2">
          <div className="w-[20%] border-b-2 border-yellow-500"></div>
          <h1 className="text-white  font-bold text-xl sm:text-2xl lg:text-4xl">
            NOSSOS SERVIÇOS
          </h1>
        </div>

        <div className="w-full  flex flex-wrap  justify-center mt-10   ">
          {features.map((service) => (
            <div
              key={service.id}
              className="w-[240px] h-[260px] flex flex-col items-center   p-4  m-2 space-y-2 rounded bg-color-secondary"
            >
              <span className="w-full h-16 flex justify-center">
                <img
                  src={service.image}
                  className="w-[20%]"
                  alt="logo serviços"
                />
              </span>
              <h1 className="text-white font-semibold ">
                {service.name.toUpperCase()}
              </h1>
              <p className="text-center text-[14px] text-secondary-300 h-20">
                {service.info}
              </p>
              <h2 className="text-yellow-500 ">R${service.price}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
