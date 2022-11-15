import React from "react";
import { useState } from "react";
import MenuBelow from "./MenuBelow";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { useStateContext } from "../context/StateContext";
import avatar from "../assets/avatar.svg";
import SideProfile from "./SideProfile";

const Nav = () => {
  const { user } = useStateContext();
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <nav className="absolute  top-0 w-full  z-50  text-white p-2 sm:p-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text font-semibold text-[15px] sm:text-xl ">
            BARBER <span className="text-yellow-500">SHOP</span>
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center justify-center space-x-8">
          <Link to="/">
            <li className="text-yellow-500  ">Home</li>
          </Link>
          <Scroll to="services" smooth={true} duration={500}>
            <li className="hover:text-yellow-500 cursor-pointer">Serviços</li>
          </Scroll>

          <Scroll to="ourTeam" smooth={true} duration={500}>
            <li className="hover:text-yellow-500 cursor-pointer">Barbeiros</li>
          </Scroll>

          <Scroll to="booking" smooth={true} duration={500}>
            <li className="hover:text-yellow-500 cursor-pointer">
              Agendamento
            </li>
          </Scroll>
        </ul>

        <div className=" lg:flex items-center space-x-4 relative ">
          {user !== null ? (
            <div>
              <button
                type="submit"
                className=" bg-yellow-500 h-10 w-10 rounded-full p-1 "
                onClick={() => setOpenProfile(true)}
              >
                <img src={avatar} className="w-8" alt="profile" />
              </button>
            </div>
          ) : (
            <Link to="/login">
              <span className="hover:text-yellow-500 cursor-pointer">
                | Login
              </span>
            </Link>
          )}
        </div>
      </div>
      <MenuBelow />
      {user && <>{openProfile && <SideProfile close={setOpenProfile} />}</>}
    </nav>
  );
};

export default Nav;
