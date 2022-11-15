import React from "react";
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";
import { GiRazor } from "react-icons/gi";
import time from "../assets/penteado.svg";
import { Link as Scroll } from "react-scroll";

const MenuBelow = () => {
  return (
    <nav className="fixed w-full  bottom-0 right-0 flex lg:hidden">
      <div className=" w-full bg-color-secondary ">
        <ul className="h-12 p-2  flex items-center justify-between  text-2xl sm:text-3xl text-yellow-500">
          <Scroll to="home" smooth={true} duration={500}>
            <AiOutlineHome className="" />
          </Scroll>
          <Scroll to="services" smooth={true} duration={500}>
            <GiRazor className="" />
          </Scroll>
          <Scroll to="ourTeam" smooth={true} duration={500}>
            <img src={time} className="w-5 sm:w-6" alt="icon-barbers" />
          </Scroll>
          <Scroll to="booking" smooth={true} duration={500}>
            <AiOutlineCalendar />
          </Scroll>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBelow;
